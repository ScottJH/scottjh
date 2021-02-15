import React, { Component } from 'react';
import Banner from '../blocks/Banner.js';
import Columns from '../blocks/Columns.js';

class Resume extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner title="Resume for Scott J Haselwood" />
                <div className="main-container" role="main">
                <Columns
                    columns = {
                        [
                            `<h3 class="code-line" data-line-start=0 data-line-end=1><a id="Senior_Web_Developer_0"></a>Senior Web Developer</h3>
                            <p class="has-line-data" data-line-start="1" data-line-end="3"><strong>Daylight - Portland, OR</strong><br>
                            <em>September 2018 to Present</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="3" data-line-end="4">Developed custom WordPress, Craft, Statistic and Wine Direct sites for clients in a variety of industries</li>
                            <li class="has-line-data" data-line-start="4" data-line-end="11">Clients indlude:
                            <ul>
                            <li class="has-line-data" data-line-start="5" data-line-end="6">Ste. Michelle Wine Estates</li>
                            <li class="has-line-data" data-line-start="6" data-line-end="7">Oregon Coast Bank</li>
                            <li class="has-line-data" data-line-start="7" data-line-end="8">The Dougy Center</li>
                            <li class="has-line-data" data-line-start="8" data-line-end="9">Portland Audubon</li>
                            <li class="has-line-data" data-line-start="9" data-line-end="10">Marchex</li>
                            <li class="has-line-data" data-line-start="10" data-line-end="11">Hennebery Eddy Architects</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="11" data-line-end="12">Developed custom plugins for clients including integrations for Leaflet</li>
                            <li class="has-line-data" data-line-start="12" data-line-end="13">Worked closely with designers to craft custom designs and interactions</li>
                            <li class="has-line-data" data-line-start="13" data-line-end="14">Helped to develop UX standards for the development department</li>
                            <li class="has-line-data" data-line-start="14" data-line-end="15">Assisted with hiring and training of junior developers</li>
                            <li class="has-line-data" data-line-start="15" data-line-end="16">Maintained codebase for Daylight Storehouse</li>
                            <li class="has-line-data" data-line-start="16" data-line-end="18">Facilitated 1 on 1 training with clients</li>
                            </ul>
                            <h3 class="code-line" data-line-start=18 data-line-end=19><a id="Senior_Web_Developer_18"></a>Senior Web Developer</h3>
                            <p class="has-line-data" data-line-start="19" data-line-end="21"><strong>Gravitate Design Studio - Vancouver, WA</strong><br>
                            <em>March 2015 to September 2018</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="21" data-line-end="27">Developed custom WordPress sites for clients in a variety of industries
                            <ul>
                            <li class="has-line-data" data-line-start="22" data-line-end="23">Clients include:</li>
                            <li class="has-line-data" data-line-start="23" data-line-end="24">Chinook Winds Casino</li>
                            <li class="has-line-data" data-line-start="24" data-line-end="25">Campus Living Village / My Student Village</li>
                            <li class="has-line-data" data-line-start="25" data-line-end="26">CHC Hydronics</li>
                            <li class="has-line-data" data-line-start="26" data-line-end="27">Operation Warm</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="27" data-line-end="28">Developed custom plugins for clients including integrations for StarRez and Marketo</li>
                            <li class="has-line-data" data-line-start="28" data-line-end="29">Worked closely with designers to craft custom designs and interactions</li>
                            <li class="has-line-data" data-line-start="29" data-line-end="30">Helped to develop UX standards for the development department</li>
                            <li class="has-line-data" data-line-start="30" data-line-end="31">Assisted with hiring and training of junior developers</li>
                            <li class="has-line-data" data-line-start="31" data-line-end="32">Maintained codebase for Gravitate’s custom WordPress theme</li>
                            <li class="has-line-data" data-line-start="32" data-line-end="33">Maintained codebase for Gravitate Blocks Plugin</li>
                            <li class="has-line-data" data-line-start="33" data-line-end="35">Facilitated 1 on 1 training with clients</li>
                            </ul>
                            <h3 class="code-line" data-line-start=35 data-line-end=36><a id="Web_Developer_35"></a>Web Developer</h3>
                            <p class="has-line-data" data-line-start="36" data-line-end="38"><strong>Go Hamptons Media - Southampton, NY</strong><br>
                            <em>March 2014 to November 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="38" data-line-end="42">Custom Wordpress based sites for:
                            <ul>
                            <li class="has-line-data" data-line-start="39" data-line-end="40">Badilla Painters</li>
                            <li class="has-line-data" data-line-start="40" data-line-end="41">Seagreen Designs, LLC.</li>
                            <li class="has-line-data" data-line-start="41" data-line-end="42">Susan Hovdesven</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="42" data-line-end="44">Worked closely with art director to craft all custom designs</li>
                            </ul>
                            <h3 class="code-line" data-line-start=44 data-line-end=45><a id="Web_Developer_44"></a>Web Developer</h3>
                            <p class="has-line-data" data-line-start="45" data-line-end="47"><strong>KEEL Creative - Portland, OR</strong><br>
                            <em>June 2014 to October 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="47" data-line-end="49">Custom Wordpress based sites for:
                            <ul>
                            <li class="has-line-data" data-line-start="48" data-line-end="49">Success Matrix</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="49" data-line-end="51">Worked closely with art director to craft all custom designs</li>
                            </ul>
                            <h3 class="code-line" data-line-start=51 data-line-end=52><a id="Web_Developer_51"></a>Web Developer</h3>
                            <p class="has-line-data" data-line-start="52" data-line-end="54"><strong>Phoenix Technology - Portland, OR</strong><br>
                            <em>September 2013 to March 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="54" data-line-end="57">Built and implemented sites for:
                            <ul>
                            <li class="has-line-data" data-line-start="55" data-line-end="56">Bay Harbor Podiatry</li>
                            <li class="has-line-data" data-line-start="56" data-line-end="57">Rikar Pioneer Fabrication</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="57" data-line-end="59">Ongoing updates and maintenance for various client sites</li>
                            </ul>
                            <h3 class="code-line" data-line-start=59 data-line-end=60><a id="Web_Master_and_Web_DeveloperDesigner_59"></a>Web Master and Web Developer/Designer</h3>
                            <p class="has-line-data" data-line-start="60" data-line-end="62"><strong>Future Educational Films, Phenomenal Filmworks - Portland, OR</strong><br>
                            <em>March 2012 to March 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="62" data-line-end="63">Maintaining, updating and redesigning the website for the film, “Walking the Camino: Six Ways to Santiago”</li>
                            <li class="has-line-data" data-line-start="63" data-line-end="64">2014 redesigned and relaunched the site utilizing a custom Wordpress theme</li>
                            <li class="has-line-data" data-line-start="64" data-line-end="66">Integrated Woocommerce for their online store</li>
                            </ul>
                            <h3 class="code-line" data-line-start=66 data-line-end=67><a id="Sole_proprietor_66"></a>Sole proprietor</h3>
                            <p class="has-line-data" data-line-start="67" data-line-end="69"><strong>ScottJH Creative - Portland, OR</strong><br>
                            <em>March 2011 to March 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="69" data-line-end="70">Freelance web design</li>
                            <li class="has-line-data" data-line-start="70" data-line-end="71">Website management</li>
                            <li class="has-line-data" data-line-start="71" data-line-end="72">Website development</li>
                            <li class="has-line-data" data-line-start="72" data-line-end="74">graphic design</li>
                            </ul>
                            <h3 class="code-line" data-line-start=74 data-line-end=75><a id="Web_Site_Manager_Web_Developer_and_Graphic_Designer_74"></a>Web Site Manager, Web Developer and Graphic Designer</h3>
                            <p class="has-line-data" data-line-start="75" data-line-end="77"><strong>Anne Weiss Music - Portland, OR</strong><br>
                            <em>January 2011 to March 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="77" data-line-end="79">Maintained the website for Portland based singer/songwriter, Anne Weiss</li>
                            </ul>
                            <h3 class="code-line" data-line-start=79 data-line-end=80><a id="Web_Developer_79"></a>Web Developer</h3>
                            <p class="has-line-data" data-line-start="80" data-line-end="82"><strong>Blumenfeld + Fleming - New York, NY</strong><br>
                            <em>2012 to 2014</em></p>
                            <ul>
                            <li class="has-line-data" data-line-start="82" data-line-end="85">Freelance web developer for:
                            <ul>
                            <li class="has-line-data" data-line-start="83" data-line-end="84">Smart Sport Surfacing</li>
                            <li class="has-line-data" data-line-start="84" data-line-end="85">Fresh Hamptons</li>
                            </ul>
                            </li>
                            <li class="has-line-data" data-line-start="85" data-line-end="86">Programmed custom Wordpress themes based on design specs provided by Blumenfeld and Fleming designers</li>
                            </ul>`
                        ]
                    }
                />
                <Columns
                    columns = {
                        [`<p><a href="https://my.indeed.com/p/scotth-k1oj6u4" target="_blank" rel="noopener noreferrer" class="btn">View Resume on Indeed</a></p>`]
                    }
                />
                </div>
            </div>
        )
    }
}

export default Resume;
