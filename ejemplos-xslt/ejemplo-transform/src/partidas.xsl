<?xml version="1.0" encoding="UTF-8"?>
<xsl:package xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
             xmlns:xs="http://www.w3.org/2001/XMLSchema"
             name="package-uri"
             package-version="1.0"
             exclude-result-prefixes="#all"
             expand-text="yes"
             version="3.0">

    <xsl:output method="html" indent="yes"/>
    <xsl:mode on-no-match="shallow-copy" />

        <xsl:template match="/partidas">
        <html>
            <head>
                <title>Título de ejemplo para las Partidas.</title>
            </head>
            <body> 
                <div class="main">
                    <h1>Encabezado principal para las Partidas</h1>
                    
                    <h2>Partida 1:</h2>

                    <div class="partida"> 
                        <table>
                            <tr> 
                                <th>
                                    <ul>
                                        <li>Folio: <xsl:value-of select="partida/folio"/> </li>
                                        <li>Numero: <xsl:value-of select="partida/id"/> </li>
                                        <li>Nombre: <xsl:value-of select="partida/nombre"/> </li>
                                    </ul>
                                </th>
                            </tr>
                            <tr>  </tr>
                            <tr>  </tr>
                        </table>
                     </div>

                </div>
            </body>
        </html>
    </xsl:template>


    

</xsl:package>