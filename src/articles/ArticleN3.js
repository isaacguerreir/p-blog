import React, { Component } from 'react';
import '../styles/article.css';

export default class Article extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="article-body">
          <div className="title">100words - Day#1</div>

          <div className="paragraph">Create web applications is a wonderful way to improve your software craftsmanship. Understand how create and improve your code in a contextualized environment will polish some edges in your set of skills. For hone and practice everything I've been learning in the past few months, I choosed create a application to get on learning english.</div>
          <div className="subtitle">The idea</div>
          <div className="paragraph">My idea is based on a Tim Ferriss's book called 'The Four-Hour Chef'. Basically this book show a way to learning any skill more faster, breaking the main concepts in small groups. To learning any language, a practical method is memorizing the most used words on the language you want to grasp. For that I'll create a plataform where the user has to memorize the 100 words most used in the common english language in a card style. After all the answers, the user can choose an option to receive an e-mail with your porcentage score and a list of words that were answered incorrectly.</div>
          <div className="subtitle">The requirements</div>
          <div className="paragraph">
            <ol>
                <li>Use a SPA technology</li>
                <li>Have a Database</li>
                <li>Have a Authentication System</li>
                <li>Don't waste any money to deploy the app or consume any service</li>
                <li>Have a fluid design experience</li>
            </ol>
          </div>
          <div className="subtitle">Some definitions</div>
          <div className="paragraph">Thinking about how my systems work I choose certain definitions. The first definition is use the React library to create a single-page application. This resolution is based on my previous experience on this technology. I always fell the development using React more fluid that brings a sensation of control, probably because the life cycle functions avaliable and the classes as the building blocks of the system.</div>
          <div className="paragraph">To use a reliable and free database service I choose work with Firebase. Firebase is Google's company that provides a incredible approach to use database and authentication services provided in an abstracted and easy way. Using the free account you have some limitations, but all within my initial requirements.</div>
          <div className="paragraph">Finally, I'll use surge.sh, a plataform to deploy single-page applications for free (with some limitations ok for me). That's my way to develop this solution. Tomorrow I'll show some code and other choices I'm doing during the development.</div>   
        </div>
    );
  }
}