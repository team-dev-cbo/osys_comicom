<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text"/>
    
    <xsl:variable name="reactClassName">
        <xsl:text>class_</xsl:text>
        <xsl:value-of select="//console/@id" />
    </xsl:variable>
    
    <xsl:variable name="reactComponentName">
        <xsl:text>comp_</xsl:text>
        <xsl:value-of select="//console/@id" />
    </xsl:variable>
    
    <xsl:variable name="formGroupName">
        <xsl:text>form_</xsl:text>
        <xsl:value-of select="console/@group"/>_<xsl:value-of select="console/@name"/>
    </xsl:variable>

    <xsl:template match="/">
        
        <xsl:for-each select="//parameter">
            var <xsl:value-of select="@id"/> = <xsl:value-of select="@value"/>;   
        </xsl:for-each>
        
        <xsl:for-each select="//variable">
            var <xsl:value-of select="@id"/> = <xsl:value-of select="@value"/>;   
        </xsl:for-each>
        
        var <xsl:value-of select="$reactClassName"/> = React.createClass({    
    
        componentDidMount: function() {
        this.forceUpdate();
        },

        handleEval: function(str) {
        return eval(str);
        },

        render: function() {
        return (
        <xsl:copy-of select="//content"/>
        );
        },       

        content: function() {
        return "<xsl:value-of select="console/content/@name"/>";
        }, 
    
        onOpenForm: function () {
        <xsl:if test="//form-content">
            <xsl:for-each select="//parameter">
                FormStore.setField('<xsl:value-of select="$formGroupName"/>', '<xsl:value-of select="@name"/>', <xsl:value-of select="@id"/>);   
            </xsl:for-each>
            openWindowExt('<xsl:value-of select="//form-content/@src"/>', '<xsl:value-of select="console/@group"/>', '<xsl:value-of select="console/@name"/>', '_form');
        </xsl:if>    
        },

        onFormSubmitted: function () {    
        <xsl:if test="//form-content">    
            <xsl:for-each select="//parameter">
                <xsl:value-of select="@id"/> = FormStore.getField('<xsl:value-of select="$formGroupName"/>', '<xsl:value-of select="@name"/>', <xsl:value-of select="@id"/>);   
            </xsl:for-each>
            FormStore.clear('<xsl:value-of select="$formGroupName"/>');

            this.onRefreshData();
        </xsl:if>    
        },
    
        onFormCancelled: function () {  
        <xsl:if test="//form-content">    
            FormStore.clear('<xsl:value-of select="$formGroupName"/>');
        </xsl:if>    
        },
    
        onBeforeOpen: function () {
        <xsl:if test="//form-content">    
            FormStore.clear('<xsl:value-of select="$formGroupName"/>');
            FormStore.bind( 'formSubmitted', this.onFormSubmitted );
            FormStore.bind( 'formCancelled', this.onFormCancelled );
        </xsl:if>    
        },
    
        onBeforeClose: function () {
        <xsl:if test="//form-content">    
            FormStore.clear('<xsl:value-of select="$formGroupName"/>');
            FormStore.unbind( 'formSubmitted', this.onFormSubmitted );
            FormStore.unbind( 'formCancelled', this.onFormCancelled );
        </xsl:if>    
        },
 
        <xsl:if test="not(//function[@name = 'onOpening'])">    
            onOpening: function () {
            },
        </xsl:if>   
 
        <xsl:if test="not(//function[@name = 'onOpened'])">    
            onOpened: function () {
            },
        </xsl:if>   
 
        <xsl:if test="not(//function[@name = 'onClosing'])">    
            onClosing: function () {
            },
        </xsl:if>    
 
        <xsl:if test="not(//function[@name = 'onClosed'])">    
            onClosed: function () {
            },
        </xsl:if> 
 
        <xsl:if test="not(//function[@name = 'onRefreshData'])">    
            onRefreshData: function () {
            },
        </xsl:if>   
 
        <xsl:if test="not(//function[@name = 'onUpdateMemory'])">    
            onUpdateMemory: function (memory, value) {
            },
        </xsl:if>   
    
        <xsl:if test="not(//function[@name = 'onSwipe'])">    
            onSwipe: function () {
            return { };
            },
        </xsl:if>
    
        <xsl:for-each select="//function">
            <xsl:value-of select="@name"/>: function(<xsl:value-of select="@params"/>) { 
            if(this.isMounted()) {
            <xsl:copy-of select="current()" />
            }
            },    
        </xsl:for-each>
        });

        var <xsl:value-of select="$reactComponentName"/> = ReactDOM.render( React.createElement(<xsl:value-of select="$reactClassName"/>, null), document.getElementById('<xsl:value-of select="console/@id"/>') );

        quartisManager.registerConsole({
        id: "<xsl:value-of select="console/@id"/>",
        group: "<xsl:value-of select="console/@group"/>",
        name: "<xsl:value-of select="console/@name"/>",
        ext: "<xsl:value-of select="console/@ext"/>",
        container: "<xsl:value-of select="console/@container"/>",
        refreshedAt: null,
        refreshPeriod: <xsl:value-of select="console/@refresh"/>,
        memories: [
        <xsl:for-each select="console/memories/memory">"<xsl:value-of select="@name"/>",</xsl:for-each>     
        ],
        widgets: [
        <xsl:for-each select="//widget">{id: "<xsl:value-of select="@id"/>", group: "<xsl:value-of select="@group"/>", name: "<xsl:value-of select="@name"/>"},</xsl:for-each>     
        ],
        width: function () {
        return $('#<xsl:value-of select="console/@id"/>').width();
        },
        height: function () {
        return $('#<xsl:value-of select="console/@id"/>').height();
        },
        openForm: function () {
        <xsl:value-of select="$reactComponentName"/>.onOpenForm();
        },
        onOpening: function () {
        <xsl:value-of select="$reactComponentName"/>.onBeforeOpen();
        <xsl:value-of select="$reactComponentName"/>.onOpening();
        },
        onOpened: function () {
        <xsl:value-of select="$reactComponentName"/>.onOpened();
        },
        onClosing: function () {        
        <xsl:value-of select="$reactComponentName"/>.onBeforeClose();
        <xsl:value-of select="$reactComponentName"/>.onClosing();
        },
        onClosed: function () {        
        <xsl:value-of select="$reactComponentName"/>.onClosed();
        },
        onDestroyed: function () {             
        ReactDOM.unmountComponentAtNode(document.getElementById('<xsl:value-of select="console/@id"/>'));
        },
        onRefreshData: function () {
        if(this.refreshedAt === null) {
        this.refreshedAt = new Date();
        <xsl:value-of select="$reactComponentName"/>.onRefreshData();
        } else if(this.refreshPeriod &gt; 0) {
        var now = moment(new Date());
        var end = moment(this.refreshedAt); 
        var duration = moment.duration(now.diff(end));
        var secs = duration.asSeconds();
        if(this.refreshPeriod &lt; secs) {
        this.refreshedAt = new Date();
        <xsl:value-of select="$reactComponentName"/>.onRefreshData();
        }
        }
        },
        onUpdateMemory: function (memory, value) {
        <xsl:value-of select="$reactComponentName"/>.onUpdateMemory(memory, value);
        },
        onSwipe: function () {
        return <xsl:value-of select="$reactComponentName"/>.onSwipe();
        }
        });
    </xsl:template>

</xsl:stylesheet>
