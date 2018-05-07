import React, { Component } from 'react';
import '../styles/article.css';

export default class ArticleN2 extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="article-body">
          <div className="title">Under the hood: Javascript Runned</div>
          <div className="subtitle">Understand how your JS code is runned by your browser</div>

          <div className="paragraph">One of my jobs in the company I work is improve the performance in webapps. The great question I have to answer is: What's is necessary to make code in web run more faster? Well, we have a lot of ways to make this. But, first, we have to understand a little about the script language called JavaScript.</div>
          <div className="paragraph">JavaScript is script language transforming web pages in a live and dynamic environment. But first you have to understand that computers don't talk in a JS language. The only thing he understand is binary, a linear array of zeros and ones. Every browser has your engine that runs your JavaScript code and transform in a understandable-for-computer code. And how browsers run and transform JS code in computer-like code is one of the most important things one the web, because is easy to understand the pros and cons behind that language.</div>
          <div className="paragraph">Javascript is a interpreted language. In practice, that means your browser translate and send line-by-line of your code to computer process. Other languages are compiled, that means the compiler translate all your program first to binary and after that send all the data to the computer process. This is a important path to run quick as possible your code in the web, instead of first compile all your code (which could take considerable time) to run your program. The problem with this approach is, in case you write loop for your program, your have to translate and send your code line n times to be computed.  </div>
          <div className="paragraph bold"><b>JIT: Just in Time Compilers</b></div>
          <div className="paragraph">Interpreters are inefficient, we know, but in 2008 browser started to adopt a Just-in-Time (JIT) approach. The idea behind the name is "if we compile some parts of our JavaScript code"? Different vendors has different approaches to do that, but basically JIT is a compile that breaks your code in pieces called stubs. This pieces are runned, and the compiler analyze if your use this piece too much, and if you don't change the variable types during your execution.</div>
          <div className="paragraph">Why check the type of your variables? Look this code:</div>
          <pre><code>function add(x , y)
          {
            "return x + y;"
           }
          </code></pre>
          <div className="paragraph">If I call this function with the parameters 1 and 2, what happens?</div>
          <div className="paragraph">add(1, 2);
//3</div>
          <div className="paragraph">But if you change the parameters to '1' and '2'...</div>
          <div className="paragraph">
add('1', '2')
//'12'</div>
          <div className="paragraph">This happen because Javascript is dynamic typed programming language, that means all your code has to be type checked when are runner. Imagine this add() function running inside a loop. Every time the compiler has to check the variables types to make the correct process (sum or concatenation, in this case). With the JIT approach, instead of running every type check until the end, the compiler look for pieces that run many times, without any type change, and translate this piece direct to computer-like code (running your code more fast).</div>
          <div className="paragraph">It's because of that JavaScript is intrinsic slower language if compared with other compiled and static typed languages</div>
        
        </div>
    );
  }
}