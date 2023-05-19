import Head from 'next/head';
import { articles } from '../db/article';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
              <i className="fas fa-times fa-2x"></i>
            </div>
            <h1 className="text-center">Xtra Blog</h1>
          </div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li className="tm-nav-item active">
                <a href="index.html" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Blog Home
                </a>
              </li>
              <li className="tm-nav-item">
                <a href="post.html" className="tm-nav-link">
                  <i className="fas fa-pen"></i>
                  Single Post
                </a>
              </li>
              <li className="tm-nav-item">
                <a href="about.html" className="tm-nav-link">
                  <i className="fas fa-users"></i>
                  About Xtra
                </a>
              </li>
              <li className="tm-nav-item">
                <a href="contact.html" className="tm-nav-link">
                  <i className="far fa-comments"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="tm-mb-65">
            <a
              rel="nofollow"
              href="https://fb.com/templatemo"
              className="tm-social-link"
            >
              <img
                src="https://eps.edu.gr/wp-content/uploads/2021/05/facebook.png"
                width="50"
              />
            </a>
            <a href="https://twitter.com" className="tm-social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png"
                width="20px"
              />
            </a>
            <a href="https://instagram.com" className="tm-social-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                width="35"
              />
            </a>
            <a href="https://linkedin.com" className="tm-social-link">
              <img
                src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                width="30"
              />
            </a>
          </div>
          <p className="tm-mb-80 pr-5 text-white">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website.
            Left side is a sticky menu bar. Right side content will scroll up
            and down.
          </p>
        </div>
      </header>

      {/* MAIN */}
      <div className="container-fluid">
        <main className="tm-main">
          <div className="row tm-row">
            <div className="col-12">
              <form
                method="GET"
                className="form-inline tm-mb-80 tm-search-form"
              >
                <input
                  className="form-control tm-search-input"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="tm-search-button" type="submit">
                  <i
                    className="fas fa-search tm-search-icon"
                    aria-hidden="true"
                  ></i>
                </button>
              </form>
            </div>
          </div>
          <div className="row tm-row">
            <article className="col-12 col-md-6 tm-post">
              <hr className="tm-hr-primary" />
              <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                <div className="tm-post-link-inner">
                  <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
                </div>
                <span className="position-absolute tm-new-badge">New</span>
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                  Simple and useful HTML layout
                </h2>
              </a>
              <p className="tm-pt-30">
                There is a clickable image with beautiful hover effect and
                active title link for each post item. Left side is a sticky menu
                bar. Right side is a blog content that will scroll up and down.
              </p>
              <div className="d-flex justify-content-between tm-pt-45">
                <span className="tm-color-primary">Travel . Events</span>
                <span className="tm-color-primary">June 24, 2020</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>36 comments</span>
                <span>by Admin Nat</span>
              </div>
            </article>
          </div>
          <div className="row tm-row tm-mt-100 tm-mb-75">
            <div className="tm-prev-next-wrapper">
              <a
                href="#"
                className="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20"
              >
                Prev
              </a>
              <a href="#" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
                Next
              </a>
            </div>
            <div className="tm-paging-wrapper">
              <span className="d-inline-block mr-3">Page</span>
              <nav className="tm-paging-nav d-inline-block">
                <ul>
                  <li className="tm-paging-item active">
                    <a href="#" className="mb-2 tm-btn tm-paging-link">
                      1
                    </a>
                  </li>
                  <li className="tm-paging-item">
                    <a href="#" className="mb-2 tm-btn tm-paging-link">
                      2
                    </a>
                  </li>
                  <li className="tm-paging-item">
                    <a href="#" className="mb-2 tm-btn tm-paging-link">
                      3
                    </a>
                  </li>
                  <li className="tm-paging-item">
                    <a href="#" className="mb-2 tm-btn tm-paging-link">
                      4
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <footer className="row tm-row">
            <hr className="col-12" />
            <div className="col-md-6 col-12 tm-color-gray">
              Design:{' '}
              <a
                rel="nofollow"
                target="_parent"
                href="https://templatemo.com"
                className="tm-external-link"
              >
                TemplateMo
              </a>
            </div>
            <div className="col-md-6 col-12 tm-color-gray tm-copyright">
              Copyright 2020 Xtra Blog Company Co. Ltd.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
