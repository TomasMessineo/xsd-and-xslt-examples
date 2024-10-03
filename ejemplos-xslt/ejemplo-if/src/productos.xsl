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

                        <!-- El foreach es importante ya que indicamos que el mismo va a recorrer todos los nodos
                        "producto" preguntando si la cantidad o el valor que evaluemos cumple con la condición del if-->

                        <xsl:for-each select="carrito/producto">

                            <!-- El IF permite hacer un test condicional con los contenidos de un nodo.
                            En este caso, comparamos que el valor de "cantidad" sea mayor a 20, para exportar html
                            solo esos valores. -->

                            <xsl:if test="cantidad > 20">
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
                                </tr>
                            </xsl:if>

                        </xsl:for-each>

                    </table>
                </body>
            </html>
        </xsl:copy>
    </xsl:template>

    

</xsl:package>