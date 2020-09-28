import styled from 'styled-components'

const l_device = 960
const m_device = 760
const s_device = 480
const gutter = 20
const columns = 12

function getWidthGrid(value: number) {
  if (!value) return
  const width = value / columns * 100;
  return `flex: 0 0 calc(${width}% - ${gutter}px)`
}

interface ColumnProps {
  desktop?: number
  tablet?: number
  mobile?: number
}

export const Container = styled.div`
  max-width: ${l_device}px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 0 auto;
  padding: 0  0 20px 0;

  & > div {
    margin-top: 20px;
  }

  @media only screen and (min-width: ${m_device}px) and (max-width: ${l_device - 1}px) {
    & {
      max-width: 760px;
    }
  }
  
  @media only screen and (max-width: ${m_device - 1}px) {
    & {
      max-width: ${s_device}px;
    }
  } 
  /* &, div {
    min-height: 50px!important;
    background: rgba(0,0,0,.3);
  } */
`

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-left: ${-gutter / 2}px;
  margin-right: ${-gutter / 2}px;
  
  @media only screen and (max-width: ${m_device - 1}px) {
    & > div + div {
      margin-top: 10px;
    }
  }
`

export const Column = styled.div<ColumnProps>`
  align-self: flex-start;
  margin-left: ${gutter / 2}px;
  margin-right: ${gutter / 2}px;
  min-height: 1px;
  flex: 1 1 100%;

  @media only screen and (max-width: ${m_device - 1}px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)};
    align-self: auto;
    /* color: yellow; */
  }

  @media only screen and (min-width: ${m_device}px) and (max-width: ${l_device - 1}px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)};
    /* color: #16fb32; */
  }

  @media only screen and (min-width: ${l_device}px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)};
    /* color: white; */
  }
`

Column.defaultProps = {
  mobile: 12
}