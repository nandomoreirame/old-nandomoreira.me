import React, { Component } from 'react'
import Link from 'gatsby-link'
// import PropTypes from 'prop-types'

import styles from './nav.module.styl'

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
      links: [
        {
          name: 'Sobre mim',
          path: '/about'
        }, {
          name: 'Portfolio',
          path: '/portfolio'
        }, {
          name: 'Contato',
          path: '/contact'
        }
      ]
    }

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  componentDidMount() {
    window.closeNav = () => {
      this.closeNav()
    }
  }

  openNav() {
    this.setState({
      isOpen: true
    })
  }

  closeNav() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <nav
        className={
          "Nav " +
          (styles.Nav) +
          (this.props.isTop ? " Nav--top" : '') +
          (this.state.isOpen ? " Nav--open" : '')
        }
      >
        {this.props.isTop && (
          <Link className={styles.Nav__logo} to="/">
            <span>nando</span>moreira
          </Link>
        )}

        <ul className={styles.Nav__list}>
          {this.state.links.map(item => {
            return (
              <li className={"Nav__item " + styles.Nav__item} key={item.path}>
                <Link className={styles.Nav__link} to={item.path} itemProp="url">{item.name}</Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.Nav__close} onClick={this.closeNav}>
          <svg viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </div>

        <button className={styles.Nav__toggle} onClick={this.openNav}>
          Menu
        </button>
      </nav>
    )
  }
}

Nav.defaultProps = {
  type: 'short'
}

export default Nav
