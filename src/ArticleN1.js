import React, { Component } from 'react';
import './article.css'

export default class ArticleN1 extends Component {


  render() {
    

    return (
        <div className="article-body">
          <div className="title">When I started...</div>
          <div className="subtitle">A little about what I do and when I started.</div>

          <div className="paragraph">I started in 2016 when I was still a journalist. I was reading some articles when I found a text about learning programming languages and how they could improve your work. It's easy for me now acknowledge that my life was in an uncomfortable situation. I didn't have as many challenges as I had in my work. I felt my life stable, but not in a good way.</div>
          <div className="paragraph">The seek for learning something so far away from my professional field brought some memories, like when I was a child and love to understand different things about what was surrounding me, felling a true eagerness to learn. All the difficulties passed paved the way to make me felt more confident about programming. When I realized, my interest became strong enough to decide that I wanted to be a developer.</div>
          <div className="paragraph">In 2017, I started a Software Engineer degree at the University of my city. In August of the same year, I started my career as a Front-End Engineer at an International Group.</div>
          <div className="paragraph">This is a blog for help me to put into words what I'm learning and maybe help some other people in the community.</div>
        
        </div>
    );
  }
}