import React, { Component } from 'react';
import {Banner, ImageFull, Columns, ImageContent } from '../blocks';

class Illustration extends Component {
    render() {
        return (
            <div class="wrapper">
                <Banner title="Cartoonist and Illustrator"/>
                
                <Columns
                    columns = {
                        [
                            `<h2>Escape From Wrestle Planet</h2>`,
                            `<p>I recently wrote and drew a short sci-fi wrestling story called <a href="https://www.dropbox.com/s/1ecfvgq05shh5ko/escape-from-wrestle-planet-layout.pdf?dl=0" target="_blank">ESCAPE FROM WRESTLE PLANET</a> and you can read it for free here.</p>`
                        ]
                    }
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/escape-from-wrestle-planet-preview.jpg')}
                    heading="Escape From Wrestle Planet - Page 5 Preview Image"
                    imageAlt="Escape From Wrestle Planet"
                />
                <Columns
                    columns = {
                        [
                            `<h2>Editorail Cartoons for Linkage Mag</h2>`,
                            `<p>Since January, 2021, I have been creating humorous cartoons for Jay Leno's "Funny That You Ask" column in <a href="https://linkagemag.com/" target="_blank">Linkage Mag</a>. Below are a selection of my favorites. All of these were done digitally using Clip Studio Paint.</p>`
                        ]
                    }
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/tim-jay-race-linkage-011.jpg')}
                    imageAlt="Jay Leno and Tim Allen drag race"
                />
                                <ImageFull
                    image={require('../assets/images/portfolio/illustration/linkage-008.jpg')}
                    imageAlt="Jay Leno discovers car under trash"
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/linkage-006-knowledge.jpg')}
                    imageAlt="Jay Leno and the knowledge of automotive history"
                />
                <ImageFull
                    image={require('../assets/images/portfolio/illustration/jay-and-dale.jpg')}
                    imageAlt="Jay Leno and Dale Earnhardt racing"
                />
                <Columns
                    columns = {
                        [
                            `<h2>Wrestling Fan Art</h2>`,
                            `<p>In 2022 I participated in the WRESTLETOBER drawing challenge. In 2023, I'll be releasing a zine of these drawings. Here are some of my favorites. All drawings done on paper using pencil and ink.</p>`
                        ]
                    }
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/stone-cold.jpg')}
                    heading="Stone Cold Steve Austin"
                    imageAlt="Stone Cold Steve Austin"
                />
                
                <ImageContent
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/butcher-blade-bunny.jpg')}
                    heading="The Butcher, the Blade and the Bunny"
                    imageAlt="The Butcher, the Blade and the Bunny"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/dr-britt-baker-dmd.jpg')}
                    heading="Dr.Britt Baker D.M.D."
                    imageAlt="Dr.Britt Baker D.M.D."
                />
                <ImageContent
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/macho-man.jpg')}
                    heading="Macho Man Randy Savage"
                    imageAlt="Macho Man Randy Savage"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/bret-hart.jpg')}
                    heading="Bret the Hitman Hart"
                    imageAlt="Bret the Hitman Hart"
                />
                <ImageContent
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/thunder-liger.jpg')}
                    heading="Jushin Thunder Liger"
                    imageAlt="Jushin Thunder Liger"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/thunder-rosa.jpg')}
                    heading="Thunder Rosa"
                    imageAlt="Thunder Rosa"
                />
                <Columns
                    columns = {
                        [
                            `<h2>Dune Fan Art</h2>`,
                            `<p>In 2020 I participated in the DUNETOBER drawing challenge. In 2021, I self-published zine of these drawings. Here are some of my favorites. All drawings done on paper using pencil and ink.</p>`
                        ]
                    }
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/Muadib.jpg')}
                    heading="Muadib"
                    imageAlt="Muadib"
                />
                <ImageContent
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/Alia-of-the-Knife.jpg')}
                    heading="Alia of the Knife"
                    imageAlt="Alia of the Knife"
                />
               <ImageContent
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/Chani.jpg')}
                    heading="Chani"
                    imageAlt="Chani"
                />
                <ImageContent
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/Paul.jpg')}
                    heading="Paul"
                    imageAlt="Paul"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/Sardukar.jpg')}
                    heading="Sardukar"
                    imageAlt="Sardukar"
                />
                <ImageContent
                    bg="grey"
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/Blind-Preacher.jpg')}
                    heading="The Blind Preacher"
                    imageAlt="The Blind Preacher"
                />
                <Columns
                    columns = {
                        [
                            `<h2>Sketches</h2>`,
                            `<p>Coming soon...</p>`
                        ]
                    }
                />
            </div>
        )
    }
}

export default Illustration;