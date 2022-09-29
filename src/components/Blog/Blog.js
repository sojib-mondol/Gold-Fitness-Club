import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div style={{textAlign: "left"}} className='container shadow-lg p-5 rounded ml-5'>
            <div>
                <h2>1. How does react woks?</h2>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
                <h6>State Management in React</h6>
                <p>A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.

</p>
            </div>
            <div>
                <h2 >2. Difference between state and props?</h2>
                <h4 >PROPS</h4>
                <div >
                <p>1. The Data is passed from one component to another.</p>
                <p>2. It is Immutable (cannot be modified).</p>
                <p>3. Props can be used with state and functional components.</p>
                <p>4. Props are read-only.</p>
                <h4>STATE</h4>
                <p>1. The Data is passed within the component only.</p>
                <p>2. It is Mutable ( can be modified).</p>
                <p>3. State can be used only with the state components/class component (Before 16.0).</p>
                <p>4. State is both read and write.</p>
                </div>
            </div>
            <div>
                <h2>3. Use of useeffect in react</h2>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
            </div>
        </div>
    );
};

export default Blog;