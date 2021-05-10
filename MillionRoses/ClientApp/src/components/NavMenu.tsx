import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface NavMenuState {
  collapsed: boolean;
}

export class NavMenu extends Component<any, NavMenuState> {
  static displayName = NavMenu.name;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 50) {
      document.getElementById('navbar')?.classList.add('navbar-background');
    } else {
      document.getElementById('navbar')?.classList.remove('navbar-background');
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm ng-white mb-3'
          id='navbar'
          light>
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
            <Collapse
              className='d-sm-inline-flex flex-sm-row-reverse'
              isOpen={!this.state.collapsed}
              navbar
              onClick={this.toggleNavbar}>
              <NavbarBrand tag={Link} to='/'>
                Головна
              </NavbarBrand>
              <ul className='navbar-nav flex-grow'>
                <NavItem>
                  <NavLink tag={Link} className='text-dark' to='/documents'>
                    Документи
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className='text-dark' to='/resources'>
                    Допомогти
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    href='https://www.facebook.com/SaveVictoriaTogether'
                    className='facebook social'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faFacebook} size='2x' color='gray' />
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href='https://www.instagram.com/help_viktoria_sma/'
                    className='instagram social'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size='2x'
                      color='gray'
                    />
                  </a>
                </NavItem>
                <NavItem>
                  <a
                    href='https://www.gofundme.com/f/please-help-1-year-old-victoria-fight-sma-illness?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer'
                    className='gofundme-social'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <svg
                      version='1.0'
                      xmlns='http://www.w3.org/2000/svg'
                      width='25.000000pt'
                      height='25.000000pt'
                      viewBox='0 0 25.000000 25.000000'
                      preserveAspectRatio='xMidYMid meet'>
                      <metadata>
                        Created by potrace 1.16, written by Peter Selinger
                        2001-2019
                      </metadata>
                      <g
                        transform='translate(0.000000,25.000000) scale(0.004883,-0.004883)'
                        fill='#000000'
                        stroke='none'>
                        <path
                          d='M2404 4690 c-172 -45 -290 -147 -339 -295 -17 -52 -32 -367 -27 -570
9 -346 175 -505 527 -505 287 0 450 114 513 357 14 58 16 110 14 366 -3 261
-5 306 -22 360 -46 148 -174 256 -348 293 -93 19 -232 17 -318 -6z m260 -321
c22 -6 52 -24 68 -39 l28 -28 0 -282 0 -282 -33 -33 c-79 -79 -270 -73 -336
11 -22 27 -22 32 -19 300 3 259 4 274 24 301 40 54 170 79 268 52z'
                        />
                        <path
                          d='M350 4464 c-146 -31 -256 -110 -319 -229 -23 -45 -26 -60 -26 -160 0
-105 2 -114 33 -177 29 -60 43 -75 125 -136 195 -146 792 -549 874 -591 199
-101 499 -49 651 113 73 79 96 137 95 249 0 66 -5 86 -32 142 -45 91 -102 144
-286 270 -88 59 -270 184 -405 276 -135 91 -269 179 -298 193 -121 61 -275 80
-412 50z m211 -325 c40 -13 810 -525 865 -575 l37 -34 -23 -25 c-42 -45 -153
-67 -230 -45 -33 9 -222 134 -683 450 -173 119 -196 138 -197 162 0 59 135 98
231 67z'
                        />
                        <path
                          d='M4528 4470 c-119 -19 -185 -56 -611 -345 -226 -154 -436 -304 -465
-332 -77 -76 -115 -162 -115 -261 -1 -120 21 -173 107 -258 58 -57 87 -77 150
-103 155 -64 346 -65 481 -2 109 50 932 615 969 664 54 73 70 118 74 217 5
115 -16 183 -82 263 -100 123 -311 188 -508 157z m190 -335 c54 -16 83 -45 75
-73 -5 -17 -184 -143 -629 -444 -190 -128 -241 -158 -279 -164 -56 -8 -137 8
-183 36 -59 36 -45 53 143 179 94 62 251 170 350 241 349 247 389 264 523 225z'
                        />
                        <path
                          d='M2190 3225 c-545 -62 -993 -266 -1257 -573 -71 -84 -102 -140 -103
-187 0 -45 40 -116 79 -142 l34 -23 1617 0 1617 0 33 23 c75 51 98 128 62 209
-24 56 -190 230 -292 308 -252 192 -554 311 -944 372 -173 27 -657 34 -846 13z
m795 -339 c262 -43 478 -114 652 -216 l68 -40 -1145 0 c-1024 1 -1143 2 -1125
16 41 31 243 124 333 153 117 38 289 76 407 90 50 6 104 13 120 15 80 11 595
-3 690 -18z'
                        />
                        <path
                          d='M1164 2210 c-75 -8 -171 -33 -215 -56 -24 -12 -28 -11 -45 7 -68 76
-193 64 -258 -24 -21 -28 -21 -34 -21 -707 0 -670 0 -679 21 -706 40 -54 70
-69 139 -69 69 0 99 15 139 69 20 27 21 42 26 504 5 430 7 480 23 509 60 110
208 170 352 143 88 -17 161 -62 200 -124 l30 -49 5 -478 c5 -463 6 -478 26
-505 40 -54 70 -69 139 -69 69 0 99 15 139 69 20 27 21 42 26 504 5 465 6 478
27 517 28 52 68 89 123 114 36 16 66 21 147 21 156 0 239 -36 286 -123 22 -41
22 -49 27 -524 5 -467 6 -482 26 -509 40 -54 70 -69 139 -69 69 0 99 15 139
69 20 27 21 41 24 496 3 517 0 555 -58 678 -41 88 -142 187 -239 236 -109 55
-205 78 -336 78 -170 1 -311 -43 -422 -131 l-49 -38 -39 33 c-120 102 -325
154 -521 134z'
                        />
                        <path
                          d='M3551 2199 c-146 -29 -277 -97 -390 -205 -165 -157 -240 -336 -241
-570 0 -335 210 -622 540 -735 90 -31 103 -33 240 -33 171 -1 230 12 365 79
202 99 369 294 351 408 -14 89 -75 141 -161 141 -69 0 -101 -20 -165 -105
-148 -198 -385 -253 -605 -142 -90 46 -187 166 -219 270 l-7 23 568 2 568 3
33 23 c48 35 66 76 66 152 0 81 -32 189 -87 295 -32 61 -63 102 -132 170 -123
123 -238 188 -393 220 -73 16 -261 18 -331 4z m301 -340 c33 -11 84 -35 112
-53 49 -31 136 -119 136 -137 0 -5 -175 -9 -390 -9 -222 0 -390 4 -390 9 0 18
91 110 140 141 110 71 269 91 392 49z'
                        />
                      </g>
                    </svg>
                  </a>
                </NavItem>
              </ul>
              <a className='chose-bouquet-btn-nav' href='#chose'>
                ОБРАТИ БУКЕТ
              </a>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
