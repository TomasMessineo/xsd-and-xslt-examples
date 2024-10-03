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

                        <!-- Iterador Foreach que recorre cada elemento "producto" adentro del carrito.
                        select determina el conjunto de nodos a ser iterados -->
                        <xsl:for-each select="carrito/producto">
                            <tr>
                                <td>
                                    <!-- Obtenemos los valores del nodo seleccionado y se coloca como texto.
                                    En este ejemplo lo coloca adentro de td.
                                    Con select indicamos cual es l nodo o atributo a obtener -->
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

                            </tr>
                        </xsl:for-each>

                    </table>
                </body>
            </html>
        </xsl:copy>
    </xsl:template>

    

</xsl:package>