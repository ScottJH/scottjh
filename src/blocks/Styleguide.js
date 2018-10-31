import React, { Component } from 'react';
import Form from '../components/forms/Form';
import Icon from '../components/Icon'

class Styleguide extends Component {
    render() {
        return (
            <div className="styleguide">

                <h1>HTML Ipsum Presents</h1>

                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="https://google.com">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                <h2>Header Level 2</h2>

                <ol>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>

                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>
                    <cite> - Someone</cite>
                </blockquote>

                <h3>Header Level 3</h3>

                <ul>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ul>

                <h4>Form Styles</h4>

                <Form/>

                <h5>Buttons</h5>

                <button>Button</button>
                <a href="#!" className="btn">Button</a>

                <h6>Icons</h6>

                <Icon icon="facebook" />
                <Icon icon="twitter" />
                <Icon icon="instagram" />

            </div>
        )
    }
};

export default Styleguide;
