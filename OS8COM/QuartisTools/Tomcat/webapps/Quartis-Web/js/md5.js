/*
 *  md5.js 1.0b 27/06/96
 *
 * Javascript implementation of the RSA Data Security, Inc. MD5
 * Message-Digest Algorithm.
 *
 * Copyright (c) 1996 Henri Torgemane. All Rights Reserved.
 *
 * Permission to use, copy, modify, and distribute this software
 * and its documentation for any purposes and without
 * fee is hereby granted provided that this copyright notice
 * appears in all copies.
 *
 * Of course, this soft is provided "as is" without express or implied
 * warranty of any kind.
 *
 *
 * Modified with german comments and some information about collisions.
 * (Ralf Mieke, ralf@miekenet.de, http://mieke.home.pages.de)
 * French translation: Serge Fran�ois, serge@selfhtml.org, http://fr.selfhtml.org
 */



function array(MD5_n) { 
  for(MD5_i = 0; MD5_i < MD5_n; MD5_i++) this[MD5_i] = 0;
  this.length = MD5_n;
}



/* Quelques fonctions fondamentales doivent �tre transform�es � cause
 * d'erreurs Javascript.
 * Essayez par exemple de calculer 0xffffffff >> 4 ...
 * Les fonctions utilis�es maintenant sont il est vrai plus lentes que les
 * fonctions originales mais elles fonctionnent.
 */

function integer(MD5_n) { 
    return MD5_n%(0xffffffff+1); 
}

function shr(MD5_a, MD5_b) { 
  MD5_a = integer(MD5_a);
  MD5_b = integer(MD5_b);
  if (MD5_a - 0x80000000>=0) {
    MD5_a = MD5_a%0x80000000;
    MD5_a >>= MD5_b;
    MD5_a += 0x40000000>>(MD5_b - 1);
  } else {
    MD5_a >>= MD5_b;
  }
  return MD5_a;
}

function shl1(MD5_a) { 
  MD5_a = MD5_a%0x80000000;
  if (MD5_a&0x40000000 == 0x40000000)
  {
    MD5_a -= 0x40000000;
    MD5_a *= 2;
    MD5_a += 0x80000000;
  } else {
    MD5_a *= 2;
  }
  return MD5_a;
}

function shl(MD5_a, MD5_b) { 
  MD5_a = integer(MD5_a);
  MD5_b = integer(MD5_b);
  for (var MD5_i=0; MD5_i < MD5_b; MD5_i++) MD5_a = shl1(MD5_a);
  return MD5_a;
}

function and(MD5_a, MD5_b) { 
  MD5_a = integer(MD5_a);
  MD5_b = integer(MD5_b);
  var MD5_t1 = (MD5_a - 0x80000000);
  var MD5_t2 = (MD5_b - 0x80000000);
  if (MD5_t1 >= 0)
    if (MD5_t2 >= 0)
      return ((MD5_t1 & MD5_t2) + 0x80000000);
    else
      return (MD5_t1 & MD5_b);
  else
    if (MD5_t2 >= 0)
      return (MD5_a & MD5_t2);
    else
      return (MD5_a & MD5_b);
}

function or(MD5_a, MD5_b) { 
  MD5_a = integer(MD5_a);
  MD5_b = integer(MD5_b);
  var MD5_t1 = (MD5_a-0x80000000);
  var MD5_t2 = (MD5_b-0x80000000);
  if (MD5_t1>=0)
    if (MD5_t2>=0)
      return ((MD5_t1|MD5_t2)+0x80000000);
    else
      return ((MD5_t1|MD5_b)+0x80000000);
  else
    if (MD5_t2>=0)
      return ((MD5_a|MD5_t2)+0x80000000);
    else
      return (MD5_a|MD5_b);
}

function xor(MD5_a, MD5_b) { 
  MD5_a = integer(MD5_a);
  MD5_b = integer(MD5_b);
  var MD5_t1=(MD5_a - 0x80000000);
  var MD5_t2=(MD5_b - 0x80000000);
  if (MD5_t1 >= 0)
    if (MD5_t2 >= 0)
      return (MD5_t1^MD5_t2);
    else
      return ((MD5_t1^MD5_b)+0x80000000);
  else
    if (MD5_t2 >= 0)
      return ((MD5_a^MD5_t2)+0x80000000);
    else
      return (MD5_a^MD5_b);
}

function not(MD5_a) { 
  MD5_a = integer(MD5_a);
  return (0xffffffff - MD5_a);
}

/* D�but de l'algorithme */
    var MD5_state = new array(4);
    var MD5_count = new Array(2);
        MD5_count[0] = 0;
        MD5_count[1] = 0;
    
    var MD5_buffer = new array(64);
    var MD5_transformBuffer = new array(16);
    var MD5_digestBits = new array(16);

    var MD5_S11 = 7;
    var MD5_S12 = 12;
    var MD5_S13 = 17;
    var MD5_S14 = 22;
    var MD5_S21 = 5;
    var MD5_S22 = 9;
    var MD5_S23 = 14;
    var MD5_S24 = 20;
    var MD5_S31 = 4;
    var MD5_S32 = 11;
    var MD5_S33 = 16;
    var MD5_S34 = 23;
    var MD5_S41 = 6;
    var MD5_S42 = 10;
    var MD5_S43 = 15;
    var MD5_S44 = 21;

    function F(MD5_x, MD5_y, MD5_z) { 
        return or(and(MD5_x, MD5_y), and(not(MD5_x), MD5_z));
    }

    function G(MD5_x, MD5_y, MD5_z) { 
        return or(and(MD5_x, MD5_z), and(MD5_y, not(MD5_z)));
    }

    function H(MD5_x, MD5_y, MD5_z) { 
        return xor(xor(MD5_x, MD5_y), MD5_z);
    }

    function I(MD5_x, MD5_y, MD5_z) { 
        return xor(MD5_y ,or(MD5_x , not(MD5_z)));
    }

    function rotateLeft(MD5_a, MD5_n) { 
        return or(shl(MD5_a, MD5_n),(shr(MD5_a, (32 - MD5_n))));
    }

    function FF(MD5_a, MD5_b, MD5_c, MD5_d, MD5_x, MD5_s, MD5_ac) { 
        MD5_a = MD5_a + F(MD5_b, MD5_c, MD5_d) + MD5_x + MD5_ac;
        MD5_a = rotateLeft(MD5_a, MD5_s);
        MD5_a = MD5_a + MD5_b;
        return MD5_a;
    }

    function GG(MD5_a, MD5_b, MD5_c, MD5_d, MD5_x, MD5_s, MD5_ac) { 
        MD5_a = MD5_a+ G(MD5_b, MD5_c, MD5_d) + MD5_x + MD5_ac;
        MD5_a = rotateLeft(MD5_a, MD5_s);
        MD5_a = MD5_a + MD5_b;
        return MD5_a;
    }

    function HH(MD5_a, MD5_b, MD5_c, MD5_d, MD5_x, MD5_s, MD5_ac) { 
        MD5_a = MD5_a + H(MD5_b, MD5_c, MD5_d) + MD5_x + MD5_ac;
        MD5_a = rotateLeft(MD5_a, MD5_s);
        MD5_a = MD5_a + MD5_b;
        return MD5_a;
    }

    function II(MD5_a, MD5_b, MD5_c, MD5_d, MD5_x, MD5_s, MD5_ac) { 
        MD5_a = MD5_a + I(MD5_b, MD5_c, MD5_d) + MD5_x + MD5_ac;
        MD5_a = rotateLeft(MD5_a, MD5_s);
        MD5_a = MD5_a + MD5_b;
        return MD5_a;
    }

    function transform(MD5_buf, MD5_offset) { 
        var MD5_a=0, MD5_b=0, MD5_c=0, MD5_d=0;
        var MD5_x = MD5_transformBuffer;

        MD5_a = MD5_state[0];
        MD5_b = MD5_state[1];
        MD5_c = MD5_state[2];
        MD5_d = MD5_state[3];

        for (MD5_i = 0; MD5_i < 16; MD5_i++) {
            MD5_x[MD5_i] = and(MD5_buf[MD5_i * 4 + MD5_offset], 0xff);
            for (MD5_j = 1; MD5_j < 4; MD5_j++) {
                MD5_x[MD5_i] += shl(and(MD5_buf[MD5_i * 4 + MD5_j + MD5_offset], 0xff), MD5_j * 8);
            }
        }

        /* tour 1 */
        MD5_a = FF ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 0], MD5_S11, 0xd76aa478); /* 1 */
        MD5_d = FF ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 1], MD5_S12, 0xe8c7b756); /* 2 */
        MD5_c = FF ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 2], MD5_S13, 0x242070db); /* 3 */
        MD5_b = FF ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 3], MD5_S14, 0xc1bdceee); /* 4 */
        MD5_a = FF ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 4], MD5_S11, 0xf57c0faf); /* 5 */
        MD5_d = FF ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 5], MD5_S12, 0x4787c62a); /* 6 */
        MD5_c = FF ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 6], MD5_S13, 0xa8304613); /* 7 */
        MD5_b = FF ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 7], MD5_S14, 0xfd469501); /* 8 */
        MD5_a = FF ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 8], MD5_S11, 0x698098d8); /* 9 */
        MD5_d = FF ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 9], MD5_S12, 0x8b44f7af); /* 10 */
        MD5_c = FF ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[10], MD5_S13, 0xffff5bb1); /* 11 */
        MD5_b = FF ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[11], MD5_S14, 0x895cd7be); /* 12 */
        MD5_a = FF ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[12], MD5_S11, 0x6b901122); /* 13 */
        MD5_d = FF ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[13], MD5_S12, 0xfd987193); /* 14 */
        MD5_c = FF ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[14], MD5_S13, 0xa679438e); /* 15 */
        MD5_b = FF ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[15], MD5_S14, 0x49b40821); /* 16 */
                     
        /* tour 2 */
        MD5_a = GG ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 1], MD5_S21, 0xf61e2562); /* 17 */
        MD5_d = GG ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 6], MD5_S22, 0xc040b340); /* 18 */
        MD5_c = GG ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[11], MD5_S23, 0x265e5a51); /* 19 */
        MD5_b = GG ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 0], MD5_S24, 0xe9b6c7aa); /* 20 */
        MD5_a = GG ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 5], MD5_S21, 0xd62f105d); /* 21 */
        MD5_d = GG ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[10], MD5_S22,  0x2441453); /* 22 */
        MD5_c = GG ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[15], MD5_S23, 0xd8a1e681); /* 23 */
        MD5_b = GG ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 4], MD5_S24, 0xe7d3fbc8); /* 24 */
        MD5_a = GG ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 9], MD5_S21, 0x21e1cde6); /* 25 */
        MD5_d = GG ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[14], MD5_S22, 0xc33707d6); /* 26 */
        MD5_c = GG ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 3], MD5_S23, 0xf4d50d87); /* 27 */
        MD5_b = GG ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 8], MD5_S24, 0x455a14ed); /* 28 */
        MD5_a = GG ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[13], MD5_S21, 0xa9e3e905); /* 29 */
        MD5_d = GG ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 2], MD5_S22, 0xfcefa3f8); /* 30 */
        MD5_c = GG ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 7], MD5_S23, 0x676f02d9); /* 31 */
        MD5_b = GG ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[12], MD5_S24, 0x8d2a4c8a); /* 32 */
                     
        /* tour 3 */
        MD5_a = HH ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 5], MD5_S31, 0xfffa3942); /* 33 */
        MD5_d = HH ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 8], MD5_S32, 0x8771f681); /* 34 */
        MD5_c = HH ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[11], MD5_S33, 0x6d9d6122); /* 35 */
        MD5_b = HH ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[14], MD5_S34, 0xfde5380c); /* 36 */
        MD5_a = HH ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 1], MD5_S31, 0xa4beea44); /* 37 */
        MD5_d = HH ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 4], MD5_S32, 0x4bdecfa9); /* 38 */
        MD5_c = HH ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 7], MD5_S33, 0xf6bb4b60); /* 39 */
        MD5_b = HH ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[10], MD5_S34, 0xbebfbc70); /* 40 */
        MD5_a = HH ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[13], MD5_S31, 0x289b7ec6); /* 41 */
        MD5_d = HH ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 0], MD5_S32, 0xeaa127fa); /* 42 */
        MD5_c = HH ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 3], MD5_S33, 0xd4ef3085); /* 43 */
        MD5_b = HH ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 6], MD5_S34,  0x4881d05); /* 44 */
        MD5_a = HH ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 9], MD5_S31, 0xd9d4d039); /* 45 */
        MD5_d = HH ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[12], MD5_S32, 0xe6db99e5); /* 46 */
        MD5_c = HH ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[15], MD5_S33, 0x1fa27cf8); /* 47 */
        MD5_b = HH ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 2], MD5_S34, 0xc4ac5665); /* 48 */
                     
        /* tour 4 */
        MD5_a = II ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 0], MD5_S41, 0xf4292244); /* 49 */
        MD5_d = II ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 7], MD5_S42, 0x432aff97); /* 50 */
        MD5_c = II ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[14], MD5_S43, 0xab9423a7); /* 51 */
        MD5_b = II ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 5], MD5_S44, 0xfc93a039); /* 52 */
        MD5_a = II ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[12], MD5_S41, 0x655b59c3); /* 53 */
        MD5_d = II ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[ 3], MD5_S42, 0x8f0ccc92); /* 54 */
        MD5_c = II ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[10], MD5_S43, 0xffeff47d); /* 55 */
        MD5_b = II ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 1], MD5_S44, 0x85845dd1); /* 56 */
        MD5_a = II ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 8], MD5_S41, 0x6fa87e4f); /* 57 */
        MD5_d = II ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[15], MD5_S42, 0xfe2ce6e0); /* 58 */
        MD5_c = II ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 6], MD5_S43, 0xa3014314); /* 59 */
        MD5_b = II ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[13], MD5_S44, 0x4e0811a1); /* 60 */
        MD5_a = II ( MD5_a, MD5_b, MD5_c, MD5_d, MD5_x[ 4], MD5_S41, 0xf7537e82); /* 61 */
        MD5_d = II ( MD5_d, MD5_a, MD5_b, MD5_c, MD5_x[11], MD5_S42, 0xbd3af235); /* 62 */
        MD5_c = II ( MD5_c, MD5_d, MD5_a, MD5_b, MD5_x[ 2], MD5_S43, 0x2ad7d2bb); /* 63 */
        MD5_b = II ( MD5_b, MD5_c, MD5_d, MD5_a, MD5_x[ 9], MD5_S44, 0xeb86d391); /* 64 */

        MD5_state[0] += MD5_a;
        MD5_state[1] += MD5_b;
        MD5_state[2] += MD5_c;
        MD5_state[3] += MD5_d;

    }
    /* Avec l'initialisation de  Dobbertin:
       state[0] = 0x12ac2375;
       state[1] = 0x3b341042;
       state[2] = 0x5f62b97c;
       state[3] = 0x4ba763ed;
       s'il y a une collision:

       begin 644 Message1
       M7MH=JO6_>MG!X?!51$)W,CXV!A"=(!AR71,<X`Y-IIT9^Z&8L$2N'Y*Y:R.;
       39GIK9>TF$W()/MEHR%C4:G1R:Q"=
       `
       end

       begin 644 Message2
       M7MH=JO6_>MG!X?!51$)W,CXV!A"=(!AR71,<X`Y-IIT9^Z&8L$2N'Y*Y:R.;
       39GIK9>TF$W()/MEHREC4:G1R:Q"=
       `
       end
    */
    function init() {
        MD5_count[0] = MD5_count[1] = 0;
        MD5_state[0] = 0x67452301;
        MD5_state[1] = 0xefcdab89;
        MD5_state[2] = 0x98badcfe;
        MD5_state[3] = 0x10325476;
        for (MD5_i = 0; MD5_i < MD5_digestBits.length; MD5_i++)
            MD5_digestBits[MD5_i] = 0;
    }

    function update(MD5_b) { 
        var MD5_index, MD5_i;

        MD5_index = and(shr(MD5_count[0], 3), 0x3f);
        if (MD5_count[0]<0xffffffff-7)
          MD5_count[0] += 8;
        else {
          MD5_count[1]++;
          MD5_count[0]-=0xffffffff+1;
          MD5_count[0]+=8;
        }
        MD5_buffer[MD5_index] = and(MD5_b,0xff);
        if (MD5_index  >= 63) {
            transform(MD5_buffer, 0);
        }
    }

    function finish() {
        var MD5_bits = new array(8);
        var MD5_padding;
        var MD5_i=0, MD5_index=0, MD5_padLen=0;

        for (MD5_i = 0; MD5_i < 4; MD5_i++) {
            MD5_bits[MD5_i] = and(shr(MD5_count[0],(MD5_i * 8)), 0xff);
        }
        for (MD5_i = 0; MD5_i < 4; MD5_i++) {
            MD5_bits[MD5_i + 4] = and(shr(MD5_count[1],(MD5_i * 8)), 0xff);
        }
        MD5_index = and(shr(MD5_count[0], 3) ,0x3f);
        MD5_padLen = (MD5_index < 56) ? (56 - MD5_index) : (120 - MD5_index);
        MD5_padding = new array(64);
        MD5_padding[0] = 0x80;
        
        for (MD5_i = 0; MD5_i < MD5_padLen; MD5_i++)
          update(MD5_padding[MD5_i]);
      
        for (MD5_i = 0; MD5_i < 8; MD5_i++)
          update(MD5_bits[MD5_i]);

        for (MD5_i = 0; MD5_i < 4; MD5_i++) {
            for (MD5_j = 0; MD5_j < 4; MD5_j++) {
                MD5_digestBits[MD5_i * 4 + MD5_j] = and(shr(MD5_state[MD5_i], (MD5_j * 8)) , 0xff);
            }
        }
    }

/* Fin de l'algorithme MD5 */

function hexa(MD5_n) { 

 var MD5_hexa_h = "0123456789abcdef";
 var MD5_hexa_c = "";
 var MD5_hexa_m = MD5_n;
 for (MD5_hexa_i = 0; MD5_hexa_i < 8; MD5_hexa_i++) {
   MD5_hexa_c = MD5_hexa_h.charAt(Math.abs(MD5_hexa_m)%16)+MD5_hexa_c;
   MD5_hexa_m = Math.floor(MD5_hexa_m/16);
 }
 return MD5_hexa_c;
}


var MD5_ascii="01234567890123456789012345678901" +
          " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
          "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";


function MD5(MD5_message)
{
 var MD5_l, MD5_s, MD5_k, MD5_ka, MD5_kb, MD5_kc, MD5_kd;
 init();
 for (MD5_k = 0; MD5_k < MD5_message.length; MD5_k++) {
   MD5_l = MD5_message.charAt(MD5_k);
   update(MD5_ascii.lastIndexOf(MD5_l));
 }
 
 finish();
 MD5_ka = MD5_kb = MD5_kc = MD5_kd=0;
 for (MD5_i=0; MD5_i<4; MD5_i++) MD5_ka += shl(MD5_digestBits[15 - MD5_i], (MD5_i*8));
 for (MD5_i=4; MD5_i<8; MD5_i++) MD5_kb += shl(MD5_digestBits[15 - MD5_i], ((MD5_i-4)*8));
 for (MD5_i=8; MD5_i<12; MD5_i++) MD5_kc += shl(MD5_digestBits[15 - MD5_i], ((MD5_i-8)*8));
 for (MD5_i=12; MD5_i<16; MD5_i++) MD5_kd += shl(MD5_digestBits[15 - MD5_i], ((MD5_i-12)*8));

 MD5_s = hexa(MD5_kd) + hexa(MD5_kc) + hexa(MD5_kb) + hexa(MD5_ka);
 return MD5_s;
}

function pretty(o){
    var MD5_print = "[";
    var MD5_is_first = true;
    for (var MD5_key in o){
        if(MD5_is_first){
            MD5_is_first = false;
        } else {
            MD5_print += ", ";
        }
        MD5_print += MD5_key + " : " + o[MD5_key];
    }
    MD5_print += "]";
    return MD5_print;
}