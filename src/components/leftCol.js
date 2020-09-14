import React, { useState } from 'react';
import {
    LeftColumnContainer,
    PremiumContainerContent,
    MenuTitle,
    MenuRow,
    ActivityTitle,
    PremiumArrow,
    SelectedRowTab
} from "../styles"
import {
    menuContent,
} from '../globals';
import { Camera,
    ArrowRight,
    Home,
    Database,
    Calendar,
    MessageSquare,
    File,
    FilePlus,
    User
} from 'react-feather';
import { theme } from '../theme';


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



function LeftCol() {

    const [selectedMenu, setSelectedMenu] = useState(null)


    const titleContent = (
        <div style={{marginTop: '3em'}}>
            {menuContent.map((ele, ind) => {
                let icon;
                if(ind === 0){
                    icon = <Home color={theme.menu1}/>
                } else if(ind === 1){
                    icon = <FilePlus color={theme.menu1}/>
                } else if(ind === 2){
                    icon = <Camera color={theme.menu1}/>
                } else if(ind === 3){
                    icon = <User color={theme.menu1}/>
                } else if(ind === 4){
                    icon = <MessageSquare color={theme.menu1}/>
                } else if(ind === 5){
                    icon = <Calendar color={theme.menu1}/>
                } else if(ind === 6){
                    icon = <File color={theme.menu1}/>
                }
                return(
                    <dic onClick={() => setSelectedMenu(ind)}>
                        <MenuRow
                            id={ind}
                            clicked={selectedMenu === ind ? "#FFFFFF"  : null }
                            shadow={selectedMenu === ind ? '0px 4px 10px 4px rgba(0, 0, 0, 0.05)':null}
                            borderRadius={selectedMenu === ind ? '16px':null}
                        >
                            {icon}
                            <MenuTitle color={selectedMenu === ind ? theme.supportContainer: null}>{ele.title}</MenuTitle>
                            {   selectedMenu === ind ? <SelectedRowTab/> : null }
                        </MenuRow>
                    </dic>
                )
            })}
        </div>
    )


    const logoContent = (
        <div>
            <div style={{
                height: 100,
                // border: '1px dotted grey',
                width: '100%',
                // backgroundColor: '#efefef',
                display: 'flex', justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '2em',
            }}>
                <img alt='logo' src={require("../assets/logo.png")} width={200} height={100} />
            </div>
             {titleContent}
        </div>

)

    const premiumContent = (
        <div>
        <div style={{display: 'flex', marginBottom: '5em'}}>

            <PremiumContainerContent>
                <ActivityTitle style={{fontWeight: 400}}>
                    Use our Premium <br/> Features Now!
                </ActivityTitle>
                <img alt='text' src={require("../assets/premiumImage.png")} height={175} width={175}/>
            </PremiumContainerContent>

        </div>
            <PremiumArrow>
                <ArrowRight color='white' size={36}/>
            </PremiumArrow>
        </div>
    )

    return (
        <LeftColumnContainer>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent:
            'space-between',}}>
                {logoContent}
                {premiumContent}
            </div>


        </LeftColumnContainer>
    );
}

export default LeftCol;
