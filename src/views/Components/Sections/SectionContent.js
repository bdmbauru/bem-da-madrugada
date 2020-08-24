import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FaceIcon from '@material-ui/icons/Face';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

// core components

import Paper from '@material-ui/core/Paper';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import img from "assets/img/inicio.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="content">
          <GridContainer>
            <div className={classes.typo}>
              <h1 className={classes.title}>Projeto</h1>
              <br/>
              <p  className={classes.par}>
                O Bem da Madrugada é uma ação social sem fim lucrativo, que atua em prol da população menos 
                favorecida que vive em situação de rua, não possuindo qualquer vínculo político ou religioso.
                <br/>
                Criado, organizado e mantido por voluntários, seu escopo é arrecadar, organizar e distribuir 
                kits de alimentação, higiene e vestuário para pessoas que vivem em situação de rua.
              </p>
            </div>
            <GridContainer xs={12} className={classes.typo} spacing={10}> 
            <GridItem md={6}>
              <h3 className={classes.title}>Início</h3>
                <p>
                O Bem da Madrugada começou, sem muita intenção, no Natal Paulistano de 2013, com um grupo de amigos 
                da época da escola que se encontravam após as aulas da faculdade para entregar cobertores aos moradores 
                em situação de rua, atitude esta incentivada pelo pai de um deles - que trabalhava com a venda de sobras 
                de estoques e havia recebido diversos cobertores populares.<br/><br/>
                Profundamente tocados pelas situações que vivenciaram, foram tomados por emoções distintas. De um lado, 
                uma profunda tristeza, por verificarem que infelizmente há muitas pessoas vivendo em condições de rua e 
                de grande miséria, e pelo outro, uma enorme alegria, motivado pelo fato de saber que puderam trazer momentos 
                de atenção, carinho e amor para essas pessoas.<br/><br/>
                Da união desses sentimentos, aliados com a vontade de fazer a diferença praticando o bem, surgiu o projeto 
                social Bem da Madrugada.
                </p>
              </GridItem>
              <GridItem md={6}>
              <img
                src={img}
                alt="Ação #009"
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid +
                  " "
                }
              />
              </GridItem>
            </GridContainer>
          <GridContainer>
            <GridItem>
              <NavPills
                color="rose"
                tabs={[
                  {
                    tabButton: "Missão",
                    tabIcon: DirectionsWalkIcon,
                    tabContent: (
                      <span>
                        <p>
                          Auxiliar na erradicação da fome, da miséria e do abandono, fornecendo itens de alimentação, 
                          higiene e vestuário para aqueles que tanto necessitam e encontram-se às margens do alcance 
                          das autoridades, dos agentes públicos e da própria sociedade. 
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Valores",
                    tabIcon: FaceIcon,
                    tabContent: (
                      <span>
                        <p>
                      <GridContainer xs={12} spacing={3}>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Amor</Paper>
                        </GridItem>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Respeito</Paper>
                        </GridItem>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Caridade</Paper>
                        </GridItem>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Filantropia</Paper>
                        </GridItem>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Empatia</Paper>
                        </GridItem>
                        <GridItem md={4}>
                          <Paper className={classes.paper}>Legado</Paper>
                        </GridItem>
                      </GridContainer>
                      </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Organização",
                    tabIcon: AssignmentIcon,
                    tabContent: (
                      <span>
                        <p>
                          Fazendo uso da vasta experiência angariada ao longo das diversas ações realizadas, 
                          o Bem da Madrugada lapidou normas de conduta, orientação e organização das suas diversas atividades. <br/>
                          Visando maximizar o poder de atuação, organização e realização do projeto, os voluntários e as atividades 
                          são divididos em diversos grupos de ações especializadas, conforme descrito adiante.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
