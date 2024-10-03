<?xml version="1.0" encoding="UTF-8"?>
<xsl:package xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                         xmlns:xs="http://www.w3.org/2001/XMLSchema"
                         name="package-uri"
                         package-version="1.0"
                         exclude-result-prefixes="#all"
                         expand-text="yes"
                         version="3.0">

    <xsl:output method="xml" indent="yes"/>
    <xsl:mode on-no-match="shallow-copy"/>

    <xsl:key name="busquedaOrigen" match="producto" use="origen"/>
    <xsl:template match="/">
        <xsl:copy>
            <html>
                <body>
                    <h2>Carrito:</h2>
                    <table border="1">
                        <tr bgcolor= "#a0a0ff">
                            <th>Id del producto </th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Costo</th>
                            <th>Origen</th>
                        </tr>

                        <!-- En este select indicamos que la busqueda clave - valor se realizará 
                        teniendo en cuenta el orígen "Argentina". -->
                        <xsl:for-each select="key('busquedaOrigen', 'Argentina')">

                            <tr>
                                <td>
                                    <xsl:value-of select="@id"/>
                                </td>
                                <td>
                                    <xsl:value-of select="nombre"/>
                                </td>
                                <td>
                                    <xsl:value-of select="cantidad"/>
                                </td>
                                <td>
                                    <xsl:value-of select="costo"/>
                                </td>
                                <td>
                                    <xsl:value-of select="origen"/>
                                </td>
                            </tr>
                        

                        </xsl:for-each>

                    </table>
                </body>
            </html>
        </xsl:copy>
    </xsl:template>

    

</xsl:package>