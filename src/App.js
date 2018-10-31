import React, { Component } from 'react';
import Styleguide from './blocks/Styleguide'
import Banner from './blocks/Banner'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner title="Styleguide"/>
        <div className="main-container" role="main">
            <div className="inner">
                <div className="row">
                    <div className="bg-grey p-4 w-full md:w-1/2">
                        <Styleguide />
                    </div>
                    <div className="bg-grey-dark p-4 w-full md:w-1/2">
                        <Styleguide />
                    </div>
                </div>

            </div>
        </div>
        <Banner title="Blocks"/>
        <section className="block-name">
            <div className="block-name__inner pt-8 pb-8">
                <div className="row">
                    <div className="col full">
                        <h2>Here is a block</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="block-project" style={{backgroundImage: `url("https://www.placecage.com/g/1200/800")`}}>
            <div className="block-project__inner pt-16 pb-16 h-screen">
                <div className="row">
                    <div className="col full">
                        <h2>Project Block</h2>
                        <p className="text-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis dolor facere nostrum non reprehenderit nihil architecto molestias cumque, fugit eveniet atque, aperiam magnam, odio a enim sint accusamus totam sit.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="block-columns">
            <div className="block-columns__inner pt-8 pb-8">
                <div className="row">
                    <div className="col w-full md:w-1/2">
                        <h2>Content Block</h2>
                    </div>
                    <div className="col w-full md:w-1/2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nam id delectus suscipit obcaecati velit illum, ducimus at accusantium aut illo quibusdam quos distinctio quo adipisci, vitae nostrum eos minima.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="block-image-content">
            <div className="block-image-content__inner pt-8 pb-8">
                <div className="row">
                    <div className="col w-full md:w-1/2">
                        <img src="https://www.placecage.com/g/600/400" alt="Place Cage"/>
                    </div>
                    <div className="col w-full md:w-1/2">
                        <h2>Image w/Content Block</h2>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
