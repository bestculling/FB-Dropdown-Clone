import { createGlobalStyle } from 'styled-components'
import { text_color, button_size } from './variables'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
		margin: 0;
        background: #151616;
        font-family: roboto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
	}
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${text_color};
        text-decoration: none;;
    }

    .icon-button {
      width: ${button_size};
      height: ${button_size};
      background-color: #484a4d;
      border-radius: 50%;
      padding: 5px;
      margin: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 300ms;
  }

  .icon-button svg {
    fill: ${text_color};
    width: 20px;
    height: 20px;
  }

    .menu-primary-enter {
        position: absolute;
        transform: translateX(-110%);
      }
      .menu-primary-enter-active {
        transform: translateX(0%);
        transition: all var(--speed) ease;
      }
      .menu-primary-exit {
        position: absolute;
      }
      .menu-primary-exit-active {
        transform: translateX(-110%);
        transition: all var(--speed) ease;
      }
      
      
      .menu-secondary-enter {
        transform: translateX(110%);
      }
      .menu-secondary-enter-active {
        transform: translateX(0%);
        transition: all var(--speed) ease;
      }
      .menu-secondary-exit {
      
      }
      .menu-secondary-exit-active {
        transform: translateX(110%);
        transition: all var(--speed) ease;
      }
`