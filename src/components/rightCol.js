import React, { useState } from 'react';
import {
    RightColumnContainer,
    HeaderContainer,
    RightContentContainer,
    HeaderContainerOne,
    HeaderContainerTwo,
    HeaderContainerThree,
    HeaderSearchBox,
    MenuTitle,
    ActivityTitleContent,
    ActivityContent,
    ActivityTitle,
    SecondaryParagraphText,
    PlaceholderImage,
    StatusContainer,
    IndividTeamRow,
    StatusIndividualCol,
    StatusTitle,
    ExmapleBarStatus,
    DivRow,
    RevenueContainer,
    SupportContainer,
    SupportTitle,
    SupportButton,
    SpaceBetweenDiv,
    RevenueFiguresContainer,
    RevenueGraph,
    RevenueTitle,
    ThinLine,
    IndividualFiguresRow,
    TeamContainer,
    AppoinmentsContainer,
    MemberTitle,
    ArrowDownImage,
    MemberStatusTitle,
    DivAlignCenterRow,
    IndividAppointmentRow,
    NameContainer,
    OtherLabelContainers,
    BarFilled,
    ButtonText,
    StatusImage,
} from "../styles"
import {
    statusTitleText,
    statusSecondaryText,
    supportText,
    revenueText,
    revenueFigures,
    lineColors,
    teamData,
    appointmentData,
    profilePic,
    statusData
} from '../globals';
import { Search,
    ArrowRight,
    ArrowDown,
    Check,
    Clock,
    ShoppingBag,
    Truck,
    FileText,
    MapPin,
    CloudLightning,
    Headphones,
} from 'react-feather';
import { theme } from '../theme';
import SummaryGraph from "./dummyGraph"

/*
Structure of the UI
    Left Column (Flex Column)
        Logo
        Titles
        Premium Section
    Right Column
        Navigation
        Activity
        Daily Revenue + Support Center
        Appointments + Team
 */

function RightCol() {


    const [selectedAppoint, setSelectedAppoint] = useState(null)


    const mockData = [
        {
            year: '2017',
            joe: 1000,
            chandler: 2000,
            ross: 800,
        },
        {
            year: '2018',
            joe: 1500,
            chandler: 1800,
            ross: 1000,
        },
        {
            year: '2019',
            joe: 2000,
            chandler: 1750,
            ross: 950,
        }]
    const colorArray = ['#191919', '#FFCF02', '#FF5F00']
    // Object.keys(mockData).slice(1) -> ['joe','chandler','ross']
    // Object.keys(mockData).shift() -> 'year'

    const navigationContent = (
        <HeaderContainer>
            <HeaderContainerOne>
                <h1>Dashboard</h1>
            </HeaderContainerOne>

            <HeaderContainerTwo>
                <HeaderSearchBox>
                    <MenuTitle lineColor={theme.menu1}>Search</MenuTitle>
                    <Search color={theme.menu1}/>
                </HeaderSearchBox>
            </HeaderContainerTwo>

            <HeaderContainerThree>
                <img src={profilePic} height={50} width={50} style={{borderRadius: 4, marginRight: 8}}/>
                <SecondaryParagraphText>Bianca Gibson</SecondaryParagraphText>
                <ArrowDownImage>
                    <ArrowDown color={theme.rightContainerBackground} size={16}/>
                </ArrowDownImage>
            </HeaderContainerThree>

        </HeaderContainer>
    )

    const individualStatus = () => {
        return(
            <StatusContainer>
                {
                    statusData.map((ele, ind) => {
                        return(
                            <StatusIndividualCol>
                                <StatusImage color={ele.bubbleColor}>
                                    {   ind === 0 ? <Truck color={ele.lineColor} size={20}/>
                                        : ind === 1 ? <ShoppingBag color={ele.lineColor} size={20}/>
                                            : ind === 2 ? <FileText color={ele.lineColor} size={20}/>
                                                : ind === 3 ? <MapPin color={ele.lineColor} size={20}/> :
                                                    <PlaceholderImage/> }
                                </StatusImage>
                                <StatusTitle>
                                    {ele.title}
                                </StatusTitle>
                                <SecondaryParagraphText>
                                    {ele.description}
                                </SecondaryParagraphText>
                                <ExmapleBarStatus>
                                    <BarFilled fill={ele.progress.toString() + '%'} color={ele.lineColor}/>
                                </ExmapleBarStatus>
                            </StatusIndividualCol>
                        )
                    })
                }

            </StatusContainer>

        )

    }

    const activityContent = (
        <ActivityContent>
            <ActivityTitleContent>
                <SpaceBetweenDiv>
                    <div>
                        <ActivityTitle textAlign="left">
                            Activity
                        </ActivityTitle>
                        <SecondaryParagraphText>
                            Check out each column for details
                        </SecondaryParagraphText>
                    </div>
                    <StatusImage>
                        <CloudLightning size={20} color={theme.red2}/>
                    </StatusImage>
                </SpaceBetweenDiv>
            </ActivityTitleContent>
            {individualStatus()}
        </ActivityContent>
    )

    const supportContent = (
        <SupportContainer>
            <StatusImage color={theme.blue1}>
                <Headphones size={20} color={theme.rightContainerBackground}/>
            </StatusImage>
            <SupportTitle>Support Center</SupportTitle>
            <SecondaryParagraphText paraColor="white">
                {supportText}
            </SecondaryParagraphText>
            <SupportButton>
                <ButtonText>Contact Us</ButtonText>
            </SupportButton>
        </SupportContainer>
    )

    const individualFigures = () => {
        return(
            <RevenueFiguresContainer>
                {revenueText.map((ele,ind) => {
                    return(
                        <IndividualFiguresRow>
                            <ThinLine lineColor={lineColors[ind]}/>
                            <div style={{display: "flex", flex: 6, flexDirection: "column"}}>
                                <RevenueTitle textAlign={"left"}>
                                    <span>$</span>
                                    {revenueFigures[ind]}
                                </RevenueTitle>
                                <SecondaryParagraphText paraColor={theme.greyText}>
                                    {revenueText[ind]}
                                </SecondaryParagraphText>
                            </div>
                        </IndividualFiguresRow>
                    )
                })}

            </RevenueFiguresContainer>

        )
    }


    const revenueSupportContent = (
        <DivRow>
            <RevenueContainer>
                <ActivityTitle textAlign={"left"}>
                    Daily Revenue Overview
                </ActivityTitle>
                <div style={{display: 'flex', flex: 11, border: '0px dotted green'}}>
                    {individualFigures()}
                    <RevenueGraph>
                        <img src={require("../assets/lazyGraph.png")} height={'100%'} width={"100%"}/>
                    </RevenueGraph>
                </div>
            </RevenueContainer>
            {supportContent}
        </DivRow>
    )

    const teamMembers = () => {
        return(
            <div style={{
                display: 'flex',
                // border: '1px solid yellow',
                // height: '80%',
                flex: 10,
                // alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column'}}>
                {teamData.map((ele,ind) => {
                    return(
                        <IndividTeamRow borderBottom={"1px solid #E6EAEE"} >
                            <img src={ele.profile} style={{borderRadius: 20}} height={40} width={40}/>
                            <div style={{display: 'flex', flexDirection: 'column',marginLeft: 8, padding: 8,}}>
                                <MemberTitle>{ele.name}</MemberTitle>
                                <MemberStatusTitle>{ele.type}</MemberStatusTitle>
                            </div>
                        </IndividTeamRow>
                    )
                })}
            </div>
        )
    }

    const appointmentMembers = () => {
        return(
            <div style={{
                display: 'flex',
                flex: 8,
                // border: '1px solid yellow',
                justifyContent: 'space-between',
                flexDirection: 'column'}}>
                {appointmentData.map((ele,ind) => {
                    return(
                        <IndividAppointmentRow
                            onClick={() => setSelectedAppoint(ind)}
                            shad
                            shadow={selectedAppoint === ind ? "0px 8px 10px 10px rgba(0, 0, 0, 0.1)" : null}
                            color={selectedAppoint === ind ? theme.supportContainer : null}
                        >
                            <NameContainer>
                                <img src={ele.profile} style={{borderRadius: 20, marginRight: 8}} height={40} width={40}/>
                                <MemberTitle
                                    textColor={selectedAppoint === ind ? theme.rightContainerBackground : null}
                                    margBottom={"0px"}>{ele.name}</MemberTitle>
                            </NameContainer>
                            <OtherLabelContainers>
                                <MemberTitle
                                    textColor={selectedAppoint === ind ? theme.rightContainerBackground : null}
                                    margBottom={"0px"} >{ele.type}</MemberTitle>
                            </OtherLabelContainers>
                            <OtherLabelContainers>
                                <MemberTitle
                                    textColor={selectedAppoint === ind ? theme.rightContainerBackground : null}
                                    margBottom={"0px"}>{ele.date}</MemberTitle>
                            </OtherLabelContainers>
                            <OtherLabelContainers>
                                <MemberTitle
                                    textColor={selectedAppoint === ind ? theme.rightContainerBackground : null}
                                    margBottom={"0px"}>{ele.time}</MemberTitle>
                            </OtherLabelContainers>
                            <OtherLabelContainers>
                                <>
                                    {ele && ele.status === "complete" ?
                                        <Check color={selectedAppoint === ind ? '#FFFFFF' : "#000000"} size={20}/>
                                        : <Clock color={selectedAppoint === ind ? '#FFFFFF' : theme.orange2} size={20}/>
                                    }
                                </>
                            </OtherLabelContainers>
                        </IndividAppointmentRow>
                    )
                })}
            </div>
        )
    }


    const appointments = (
        <AppoinmentsContainer>
            <div style={{display: 'flex', flex: 2}}>
                <ActivityTitle textAlign={"left"}>
                    My Appointments
                </ActivityTitle>
            </div>

            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between',padding: '1em', paddingLeft: '0.5em'}}>
                <NameContainer>
                    <MemberTitle>Name</MemberTitle>
                </NameContainer>
                <OtherLabelContainers>
                    <MemberTitle>Specialist</MemberTitle>
                </OtherLabelContainers>
                <OtherLabelContainers>
                    <MemberTitle>Date</MemberTitle>
                </OtherLabelContainers>
                <OtherLabelContainers>
                    <MemberTitle>Time</MemberTitle>
                </OtherLabelContainers>
                <OtherLabelContainers>
                    <MemberTitle>Status</MemberTitle>
                </OtherLabelContainers>

            </div>

                {/* TODO: MAKE MORE MODULAR*/}
                {appointmentMembers()}

        </AppoinmentsContainer>
    )

    const appointmentsTeamContent = (
        <DivRow>
            {appointments}
            <TeamContainer>
                <ActivityTitle textAlign={"left"}>
                    My Team
                </ActivityTitle>
                {teamMembers()}
            </TeamContainer>
        </DivRow>
    )

    return (
        <RightColumnContainer>
            <RightContentContainer>
                {navigationContent}
                {activityContent}
                {revenueSupportContent}
                {appointmentsTeamContent}
            </RightContentContainer>

        </RightColumnContainer>
    );
}

export default RightCol;
