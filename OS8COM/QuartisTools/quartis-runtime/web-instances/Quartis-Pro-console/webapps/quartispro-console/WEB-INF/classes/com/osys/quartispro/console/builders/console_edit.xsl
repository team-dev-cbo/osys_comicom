<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:cmp="http://my.ns.uri" version="1.0">
    <xsl:output method="xml" indent="yes"/>

    <xsl:variable name="gridHeight">
        <xsl:text>{ @consoleHeight - 140 }</xsl:text>
    </xsl:variable>

    <xsl:template match="/">

        <console container="main">

            <variables></variables>

            <memories></memories>

            <content width="@pageWidth" height="@pageHeight">

                <cmp:TitledHeader size="B" leftIcon="load?path=consoles/images/Logo_Osys_Little.png" leftIconCol="3" centerTitle="QUARTIS PRO" centerTitleCol="6" rightIcon="load?path=consoles/images/LogoClient.png" rightIconCol="3" />

                <div className="row">
                    <cmp:AbsoluteGrid id="grid" height="{ //grid/@height }" width="{ //grid/@width }" className="center">

                        <xsl:for-each select="//grid/widget">

                            <cmp:AbsoluteGridCell x="{ @x }" y="{ @y }" width="{ @width }" height="{ @height }">
                                <cmp:Widget id="{ @id }" group="{ @group }" name="{ @name }" refresh="{ @refresh }">
                                    <xsl:if test="@onClick != ''">
                                        <xsl:attribute name="onClick"><xsl:value-of select="@onClick" /></xsl:attribute>
                                    </xsl:if>

                                    <xsl:for-each select="widget-param">

                                        <cmp:WidgetParam name="{ @name }" value="{ @value }" />

                                    </xsl:for-each>

                                </cmp:Widget>
                            </cmp:AbsoluteGridCell>

                        </xsl:for-each>

                    </cmp:AbsoluteGrid>
                </div>

            </content>

            <functions>
                <function name="openWindow" params="group,name">
            <![CDATA[
                openWindow(group, name);
            ]]>
                </function>
                <function name="executeLPX" params="lpx">
            <![CDATA[
                executeLPX(lpx, []);
            ]]>
                </function>
                <function name="onOpening" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onOpened" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onClosing" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onRefreshData" params="">
            <![CDATA[
            ]]>
                </function>
                <function name="onUpdateMemory" params="memory, value">
            <![CDATA[
            ]]>
                </function>
                <function name="onSwipe" params="">
            <![CDATA[
            ]]>
                </function>
            </functions>

        </console>

    </xsl:template>

</xsl:stylesheet>
