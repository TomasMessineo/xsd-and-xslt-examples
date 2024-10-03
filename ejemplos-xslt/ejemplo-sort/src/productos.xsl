<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                         version="3.0">

    <xsl:output method="html" indent="yes"/>
    <xsl:mode on-no-match="shallow-copy"/>

    <xsl:template match="/">
        <html>
            <body>
                <h2>Carrito:</h2>
                <table border="1">
                    <tr bgcolor="#a0a0ff">
                        <th>Id del producto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Costo</th>
                    </tr>

                    <xsl:for-each select="carrito/producto">
                        <!-- 
                            El ordenamiento SORT sirve para ordenar los elementos iterados.
                            Select indica el elemento que se usará para ordenar.
                            Order indica como deseamos ordenar si ascending o descending.
                            Case-order indica si primero van las mayúsculas o las minúsculas. 
                            Ordenar por cantidad (me aseguro de que 'cantidad' es un número) con data-type. Esto es importante si el elemento por el cual deseamos ordenar está dentro de "producto" por ejemplo.
                            Si queremos ordenar por id, el data-type puede no ir, es mas, me deja sacarlo. El id debe ir con @. Osea: @id
                        -->
                        
                        <xsl:sort select="nombre" order="ascending"/>

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
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
