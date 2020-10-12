export default interface IThemeProps {
  title: string,
  colors: {
    primary: string,
    secondary: string,
    background: string,
    text: string
    header: string,
  },
  produtos: {
    background: string,
    borderColor: string
  }
  callToAction: {
    color: string
  },
  newsletter: {
    background: string,
    color: string
  },
  footer: {
    background: string
  }
}