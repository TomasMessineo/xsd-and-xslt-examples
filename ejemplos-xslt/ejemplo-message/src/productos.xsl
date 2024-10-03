<?xml version="1.0" encoding="UTF-8"?>
<xsl:package xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                         xmlns:xs="http://www.w3.org/2001/XMLSchema"
                         name="package-uri"
                         package-version="1.0"
                         exclude-result-prefixes="#all"
                         expand-text="yes"
                         version="3.0">

    <xsl:output method="html" indent="yes"/>
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
                            <th>Orígen</th>
                        </tr>

                        <xsl:for-each select="carrito/producto">
                
                            <!-- Message es utilizado para depurar código. Permite termianr el proceso bajo una condición si lo usamos en conjunto con un if.
                            
                            En el siguiente if preguntamos:

                            - Si el orígen del producto que estoy leyendo está vacío (''), entonces ejecutamos message terminate y le indicamos "yes". Esto sirve para indicar que la ejecución 
                            debe detenerse. Cuando la ejecución se detenga se informará: "Falta un país de orígen, terminando la ejecución."
                            -->

                            <xsl:if test = "origen = ''">
                                <xsl:message terminate="yes"/>
                                    Falta un país de orígen, terminando la ejecución.
                               <!-- Debo cerrar el if --> 
                            </xsl:if>

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