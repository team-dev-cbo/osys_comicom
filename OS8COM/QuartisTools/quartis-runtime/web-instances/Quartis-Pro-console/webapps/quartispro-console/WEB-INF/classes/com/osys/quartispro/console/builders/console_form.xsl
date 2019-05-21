<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:cmp="http://my.ns.uri" version="1.0">
    <xsl:output method="xml" indent="yes"/>
    
    <xsl:variable name="formGroupName">
        <xsl:text>form_</xsl:text>
        <xsl:value-of select="console/@group"/>_<xsl:value-of select="console/@name"/>
    </xsl:variable>
    
    <xsl:template match="/">
        
        <console container="page">
  
            <xsl:copy-of select="//parameters"/>
                
            <variables></variables>
        
            <memories></memories>
        
            <content width="{//form-content/@width}" height="{//form-content/@height}">

                <cmp:TitledHeader leftTitle="@eval($i18n.get('form.preferences'))" rightTitle="{//form-content/@title}" />

                <div className="content">

                    <cmp:Form 
                        id="form"
                        formId="{$formGroupName}"
                        col="12"
                        title="{//form-content/@title}"
                        saveCol="4"
                        submitLabel="@eval($i18n.get('form.button.validate'))"
                        saveLabel="@eval($i18n.get('form.button.save'))"
                        cancelLabel="@eval($i18n.get('form.button.cancel'))"
                        onClickSubmit="@function('onClickSubmit')"
                        onClickSave="@function('onClickSave')"
                        onClickCancel="@function('onClickCancel')">
                  
                    </cmp:Form>

                </div>

            </content>
        
            <functions>
                <function name="onFormSaved" params="">
            <![CDATA[
              FormActions.saveForm();
              
              var m = @id('form');
              m.message($i18n.get('form.info.parameters_saved'), '#FFFFFF');
            ]]>
                </function>
                <function name="onFormNotSaved" params="">
            <![CDATA[
              var m = @id('form');
              m.message($i18n.get('form.error.parameters_not_saved'), '#FF0000');
            ]]>
                </function>
                <function name="onClickSubmit" params="fields">
              
                    FormActions.submitForm();

                    closeWindowExt('<xsl:value-of select="console/@group"/>', '<xsl:value-of select="console/@name"/>', '_form');
              
                </function>
                <function name="onClickSave" params="fields">
            <![CDATA[
              if (fields !== undefined && fields !== null) {
                  $.each(fields, function (key, val) {
                      UserStore.setField(key,val);
                  });
              }

              var user = getUser();
              if(user !== null) {
                UserStore.save(user.name, fields);
              } else {
                this.onFormNotSaved();
              }
            ]]>
                </function>
                <function name="onClickCancel" params="">
              
                    FormActions.cancelForm();

                    closeWindowExt('<xsl:value-of select="console/@group"/>', '<xsl:value-of select="console/@name"/>', '_form');
              
                </function>
                <function name="onOpening" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onOpened" params="">
            <![CDATA[
              UserStore.bind( 'save-succeded', this.onFormSaved );
              UserStore.bind( 'save-failed', this.onFormNotSaved );
            ]]>
                </function>
                <function name="onClosing" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onRefreshData" params="">
                </function>
                <function name="onUpdateMemory" params="memory, value">
                </function>
            </functions>
        
        </console>
    
    </xsl:template>

</xsl:stylesheet>