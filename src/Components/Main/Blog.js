import React from 'react';
import Card from 'react-bootstrap/Card';
import b1 from '../../images/b1.webp';
import b2 from '../../images/b2.webp';
import b3 from '../../images/b3.webp';
import "./Blog.css";

function Blog() {
  return (
    <section className="blog" id="id">
      <div className="container">
        <div className="title">
          <span>OUR BLOG</span>
          <h2>Your Blog Title Here</h2>
        </div>
        <div className="content">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={b1} />
            <Card.Body>
              <Card.Title style={{display:"flex"}}>
              <span>
                  <i className="fa fa-user"></i>
                  <label htmlFor="">admin</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label htmlFor="">API. 25, 2022</label>
                </span>
                <span>
                  <i className="fa fa-comments"></i>
                  <label htmlFor="">5 COMMENTS</label>
                </span>
              </Card.Title>
              <Card.Text>
              <h3>Build your Dream Software & Engineering Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={b2} />
            <Card.Body>
              <Card.Title style={{display:"flex"}}>
                <span>
                  <i className="fa fa-user"></i>
                  <label htmlFor="">admin</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label htmlFor="">API. 25, 2022</label>
                </span>
                <span>
                  <i className="fa fa-comments"></i>
                  <label htmlFor="">5 COMMENTS</label>
                </span>
              </Card.Title>
              <Card.Text>
                <h3>Build your Dream Software & Engineering Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={b3} />
            <Card.Body>
              <Card.Title style={{display:"flex"}}>
                <span>
                  <i className="fa fa-user"></i>
                  <label htmlFor="">admin</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label htmlFor="">MAY. 15, 2022</label>
                </span>
                <span>
                  <i className="fa fa-comments"></i>
                  <label htmlFor="">10 COMMENTS</label>
                </span>
              </Card.Title>
              <Card.Text>
                <h3>Build your Dream Software & Engineering Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Blog;
