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
                            `<h2>Fatal Four Pager Flipbook</h2>`,
                            `<p>Two new STAR WRASSLIN stories you can print yourself as a flipbook: <a href="https://www.dropbox.com/scl/fi/5tkxuydwfjtib4qps64rm/Fatal-4-Pager-Flip-Book.pdf?rlkey=uyrnvr8qr780pjra2mj420o6m&dl=0" target="_blank">Download</a>.</p>`
                        ]
                    }
                />
                <Columns
                    columns = {
                        [
                            `<h2>Star Wrasslin Issue #1</h2>`,
                            `<p>My sci-fi pro-wrestling anthology <a href="https://www.dropbox.com/scl/fi/sdaexsv2chddehll2m1bu/Star-Wrasslin-Issue-1.pdf?rlkey=imaer31xkdx5ck78kckl6zpq0&dl=0" target="_blank">STAR WRASSLIN #1</a> and you can be read for free here.</p>`
                        ]
                    }
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/for-social-Front Cover -reduce.jpg')}
                    heading="Star Wrasslin Issue 1"
                    imageAlt="Star Wrasslin Issue 1 Cover"
                />
                <Columns
                    columns = {
                        [
                            `<h2>Star Wrasslin Issue #2</h2>`,
                            `<p>Issue #2 coming in 2025</p>`
                        ]
                    }
                />
                <Columns
                    columns = {
                        [
                            `<h2>Stickers</h2>`,
                            `<p>I've been messing around with some sticker designs. Available 2025.</p>`
                        ]
                    }
                />
                <ImageContent
                    bg="grey"
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/The_Horrors_Persist.jpg')}
                    heading="The Horrors Persist"
                    imageAlt="The Horrors Persist"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/Ever_Lovin.jpg')}
                    heading="Ever Lovin"
                    imageAlt="Ever Lovin"
                />
                <ImageContent
                    bg="grey"
                    imageSide="right"
                    image={require('../assets/images/portfolio/illustration/Hard_Times_Dusty_Rhodes.jpg')}
                    heading="Hard Times"
                    imageAlt="Hard Times"
                />
                <ImageContent
                    bg="grey"
                    imageSide="left"
                    image={require('../assets/images/portfolio/illustration/Robots_In_Disguise.jpg')}
                    heading="Robots in Disguise"
                    imageAlt="Robots in Disguise"
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