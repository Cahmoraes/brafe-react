import React from 'react'

import Cafe1 from '../../assets/img/cafe-1.jpg'
import Cafe2 from '../../assets/img/cafe-2.jpg'
import Iguatemi from '../../assets/img/iguatemi.jpg'
import Mineirao from '../../assets/img/mineirao.jpg'
import Botafogo from '../../assets/img/botafogo.jpg'

import { Main, Sobre, Etiqueta, Produtos, Produto, Locais, Assine } from './styles'
import { Container, Column, Row } from '../../components/Grid'
import CallToAction from '../../components/CallToAction'

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <h1>Cafés com a cara<br />do Brasil</h1>
        <p>Direto das fazendas de Minas Gerais</p>
      </Main>
      <Sobre>
        <Column>
          <h2>Uma Mistura de</h2>
        </Column>
        <Column desktop={6} tablet={6}>
          <img src={Cafe1} alt="amor" />
          <Etiqueta>amor</Etiqueta>
        </Column>
        <Column desktop={6} tablet={6}>
          <img src={Cafe2} alt="perfeição" />
          <Etiqueta>perfeição</Etiqueta>
        </Column>
        <Column>
          <p>
            O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalm aente quente, mas também pode ser consumido gelado. Ele é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.
          </p>
        </Column>
      </Sobre>
      <Produtos>
        <Container>
          <Column desktop={4} tablet={4}>
            <Produto type="paulista">Paulista</Produto>
            <p>
              As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará
            </p>
          </Column>
          <Column desktop={4} tablet={4}>
            <Produto type="carioca">Carioca</Produto>
            <p>
              As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará
            </p>
          </Column>
          <Column desktop={4} tablet={4}>
            <Produto type="mineiro">Mineiro</Produto>
            <p>
              As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará
            </p>
          </Column>
          <Column style={{ textAlign: 'center', marginTop: '40px' }}>
            <CallToAction>Saiba Mais</CallToAction>
          </Column>
        </Container>
      </Produtos>

      <Locais>
        <Column>
          <Row>
            <Column desktop={6} tablet={6}>
              <img src={Botafogo} alt="Botafogo" />
            </Column>
            <Column desktop={6} tablet={6}>
              <h2>Botafogo</h2>
              <p>
                As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.
              </p>
              <CallToAction>Ver Mapa</CallToAction>
            </Column>
          </Row>
          <Row>
            <Column desktop={6} tablet={6}>
              <img src={Iguatemi} alt="Iguatemi" />
            </Column>
            <Column desktop={6} tablet={6}>
              <h2>Iguatemi</h2>
              <p>
                As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.
              </p>
              <CallToAction>Ver Mapa</CallToAction>
            </Column>
          </Row>
          <Row>
            <Column desktop={6} tablet={6}>
              <img src={Mineirao} alt="Mineirão" />
            </Column>
            <Column desktop={6} tablet={6}>
              <h2>Mineirão</h2>
              <p>
                As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.
              </p>
              <CallToAction>Ver Mapa</CallToAction>
            </Column>
          </Row>
        </Column>
      </Locais>

      <Assine>
        <Container>
          <Column desktop={6} tablet={6}>
            <div>
              <h2>
                Assine Nossa Newsletter
            </h2>
              <p>
                promoções e eventos mensais
            </p>
            </div>
          </Column>
          <Column desktop={6} tablet={6}>
            <form>
              <input type="text" placeholder="Digite seu e-mail" />
              <button type="submit">Enviar</button>
            </form>
          </Column>
        </Container>
      </Assine>
    </>
  )
}

export default Home