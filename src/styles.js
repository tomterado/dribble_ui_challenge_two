import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';

export const SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftColumnContainer = styled.div`
    display: flex;
    flex:3;
    // height: 150vh;
    background-color: ${theme.midGrey};
    justify-content: center;
    // align-items: center;
`

export const RightColumnContainer = styled.div`
    border-top-left-radius: 64px;
    border-bottom-left-radius: 64px;
    display: flex;
    flex:9;
    // height: 150vh;
    background-color: ${theme.rightContainerBackground};
`

export const RightContentContainer = styled.div`
    margin: 3em; 
    width: 100%;
    // height: 150vh;
    // border: 1px dotted cyan;
`

export const HeaderContainerOne = styled.div `
    display: flex;
    flex: 3;
`

export const HeaderContainerTwo = styled.div `
    display: flex;
    flex: 4;
    // justify-content: center;
    // align-items: center;
`

export const HeaderSearchBox = styled.div `
    display: flex;
    flex: 4;
    padding: 1em;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.searchBarContainer};
    // border: 1px dotted red;
    border-radius: 16px;
    padding-left: 1.5em;
    padding-right: 1.5em;
`

export const HeaderContainerThree = styled.div `
    display: flex;
    flex: 4;
    justify-content: flex-end;
    align-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    background-color: '#efefef';
    height: 75px;
    // border: 1px solid aqua;
    // width: 10%; 
    // margin-top: 1em;
    padding-bottom: 2em;
    align-items: center;
    justify-content: space-between;
    
`

export const ActivityContent = styled.div `
    margin-top: 2em;
    border-radius: 16px;
    margin-bottom: 2em;
    height: 275px;
    // width: 100%;
    padding: 2em;
    background-color: ${theme.activityContainer};
`

export const ActivityTitle = styled.h1 `
    font-size: 1.5em;
    text-align: ${props => props.textAlign || "center" };
    color: ${props => props.color || theme.headingTitle};
`

export const RevenueTitle = styled.h1 `
    margin: 0px;
    font-size: 2em;
    text-align: ${props => props.textAlign || "center" };
    color: ${theme.headingTitle};
`

export const SecondaryParagraphText = styled.p `
    font-size: 1em;
    margin: 0px;
    color: ${props => props.paraColor || theme.headingTitle};
    text-align: left;
`

export const StatusTitle = styled.h1 `
    font-size: 1.25em;
    text-align: left;
    color: ${theme.headingTitle};
`

export const PlaceholderImage = styled.div`
    margin: 0px;
    height: 40px;
    border-radius: 40px;
    width: 40px;
   
    background-color: ${props => props.color || theme.redBubble};
`

export const StatusImage = styled.div`
    margin: 0px;
    height: 40px;
    border-radius: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color || theme.red1};
`

export const ArrowDownImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    height: 30px;
    border-radius: 4px;
    width: 30px;
    margin: 0px 8px 0px 8px;
    background-color: ${theme.supportContainer};
`

export const PremiumArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    bottom: 20%;
    left: 40%;
    // transform: translateX(-50%);
    margin: 0px;
    height: 60px;
    border-radius: 30px;
    width: 60px;
    background-color: ${theme.supportContainer};
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);

`

export const ActivityTitleContent = styled.div `
    // border: 1px dotted grey;
    display: flex;
    flex: 6;
    flex-direction: column;
    text-align: left;
    // justify-content: space-between;
    // align-items: center;    
`

export const StatusContainer = styled.div `
    margin-top: 16px;
    // border: 1px dotted green;
    display: flex;
    flex: 6;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const StatusIndividualCol = styled.div `
    padding: 0.5em;
    flex: 6;
    // border: 1px dotted blue;
    display: flex;
    flex-direction: column;

`

export const ExmapleBarStatus = styled.div `
    margin-top: 16px;
    margin-bottom: 4px;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: ${theme.empty};    
`
export const BarFilled = styled.div `
    position: relative;
    width: ${props => props.fill || '100%'};
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.color || theme.empty};
`

export const DivRow = styled.div `
    display: flex;
`

export const IndividTeamRow = styled.div `
    height: 60px;
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    border-bottom: ${props => props.borderBottom || '0px solid grey'};
`


export const IndividAppointmentRow = styled.div `
    border-radius: 16px;
    padding: 1em;
    display: flex;
    margin-bottom: 8px;
    box-shadow: ${props => props.shadow || "0px"};
    color: ${props => props.textColor || theme.headingTitle};
    background-color: ${props => props.color || theme.rightContainerBackground};
    // background-color: ${theme.rightContainerBackground};
    margin-bottom: 1em;
    align-items: center;
`

export const NameContainer = styled.div `
    display: flex;
    flex: 4;
    align-items: center;
    // border: 1px solid purple;
`
export const OtherLabelContainers = styled.div `
    display: flex;
    flex: 2
`

export const RevenueContainer = styled.div `
    height: 350px;
    background-color: ${theme.searchBarContainer};    
    display: flex;
    flex: 9;
    margin-right: 2em;
    border-radius: 16px;
    padding: 2em;
    flex-direction: column;
`

export const SupportContainer = styled.div `
    height: 350px;
    background-color: ${theme.supportContainer};    
    display: flex;
    flex: 3;
    border-radius: 16px;
    flex-direction: column;
    padding: 1em;
    
`

export const AppoinmentsContainer = styled.div `
    margin-top: 2em;
    height: 500px;
    background-color: ${theme.searchBarContainer};    
    display: flex;
    flex: 9;
    margin-right: 2em;
    border-radius: 16px;
    padding: 2em;
    flex-direction: column;
`

export const TeamContainer = styled.div `
    margin-top: 2em;
    height: 500px;
    background-color: ${theme.searchBarContainer};    
    display: flex;
    flex: 3;
    border-radius: 16px;
    flex-direction: column;
    padding: 2em;
    
`

export const SupportTitle = styled.h3 `
    font-size: 1.25em;
    text-align: left;
    color: ${theme.supportTitle};        
`

export const MemberTitle = styled.h3 `
    margin: 0px;
    font-size: 0.8em;
    text-align: left;
    margin-bottom: ${props => props.margBottom || '8px'};
    color: ${props => props.textColor || theme.greyText2};
`

export const MemberStatusTitle= styled.p `
    font-size: 0.5em;
    text-align: left;
    margin: 0px;
    color: ${theme.grey};        
`

export const MenuRow = styled.div `
    background-color: ${props => props.clicked || theme.midGrey};
    box-shadow: ${props => props.clicked || "0px"};
    border-radius: ${props => props.borderRadius || "0px"};
    display: flex;
    height: 60px;
    width: 300px;
    padding-left: 1em;
    // border: 1px solid red;
    align-items: center;
`

export const SelectedRowTab = styled.div `
    position: absolute;
    display: flex;
    flex: 3;
    left: 475px;
    width: 5px;
    height: 50px;
    background-color: ${theme.supportContainer};
   
`

export const PremiumContainerContent = styled.div `
    height: 350px; 
    width: 100%; 
    background-color: #FFFFFF; 
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
    align-items: center;
    flex-direction: column;
    
`

export const MenuTitle = styled.p `
    font-size: 1.25em;
    margin: 0px;
    color: ${props => props.lineColor || theme.headingTitle};

    text-align: left;
    margin-left: 8px;
`

export const RevenueFiguresContainer = styled.div `
    display: flex;
    flex: 4;
    flex-direction: column;
    justify-content: space-between;
`

export const IndividualFiguresRow= styled.div `
    display: flex;
    flex: 6;
    flex-direction: row;
    align-items: center;
    // border: 1px dotted cyan;
    margin-bottom: 3em;
`

export const RevenueGraph = styled.div `
    display: flex;
    flex: 8;
    // background-color: ${props => props.lineColor || theme.headingTitle};

`

export const ThinLine = styled.div `
    height: 75%;
    width: 1px;
    margin-right: 1.5em;
    background-color: ${props => props.lineColor || theme.headingTitle};
`



export const SupportButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${theme.supportTitle}
  color: ${theme.supportContainer};
  box-shadow: none;
  font-size: 1em;
  // margin: 1em;
  height: 35px;
  margin-top: 1em;
  width: 125px;
  padding: 0.25em 1em;
  border: 0px solid #FFFFFF;
  border-radius: 12px;
`;


export const ButtonText = styled.p`
  /* Adapt the colors based on primary prop */
  margin: 0px;
  font-weight: 800;
  color: ${theme.supportContainer};
`;

