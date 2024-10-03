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
                        </tr>

                        <xsl:for-each select="carrito/producto">

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

                                <!-- 
                                Acá hacemos la selección dependiendo del valor de algún nodo.
                                Otherwise se usa si no se ha cumplido ninguno de los tests anteriores.
                                En el archivo .xml se agregó una etiqueta orígen, para saber de donde provienen los productos.
                                 -->
                                
                                <td>
                                    <xsl:choose>
                                        <xsl:when test="origen = 'Argentina'" >Importe Nacional (desde Argentina).</xsl:when>
                                        <xsl:when test="origen = 'Italia'" >Importado desde Europa.</xsl:when>
                                        <xsl:when test="origen = 'España'" >Importado desde Europa.</xsl:when>
                                        <xsl:otherwise>Importado desde América.</xsl:otherwise> <!-- Se ejecuta el Otherwise en el caso de que no se haya cumplido ninguno de los casos anteriores. -->
                                    </xsl:choose>
                                </td>

                            </tr>
                        

                        </xsl:for-each>

                    </table>
                </body>
            </html>
        </xsl:copy>
    </xsl:template>

    

</xsl:package>