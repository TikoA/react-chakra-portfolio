import { Box, Text } from '@chakra-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <Box width='100%' backgroundColor='pink.400'>
            <Text textAlign='center' color='white' fontWeight='700' fontFamily='Helvetica, Franklin Gothic Medium' fontSize='5xl'>Experience</Text>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#4A5568', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2017 - 2019"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/2306/2306154.svg' />}
            >
                <h3 className="vertical-timeline-element-title">Programming Student</h3>
                <h4 className="vertical-timeline-element-subtitle">Tumo Creative Technologies</h4>
                <p>
                Programming, JavaScript, HTML, CSS3, PHP, SCSS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#E53E3E', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - 2020"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/1649/1649189.svg' />}
            >
                <h3 className="vertical-timeline-element-title">Web Development student</h3>
                <h4 className="vertical-timeline-element-subtitle">IT-KAMASUTRA</h4>
                <p>
                React JS, Redux, React-Redux, CSS, Node JS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#805AD5', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - Present"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/svg/static/icons/svg/919/919831.svg'/>}
            >
                <h3 className="vertical-timeline-element-title">Front-End student</h3>
                <h4 className="vertical-timeline-element-subtitle">Teacher: Tigran Arshakyan</h4>
                <p>
                React JS, Redux, JavaScript, HTML, CSS3, SCSS
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DD6B20', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - Present"
                iconStyle={{ color: '#fff' }}
                icon={<img src='https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg' />}
            >
                <h3 className="vertical-timeline-element-title">Junior Front-End Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Arshakyan Company Limited</h4>
                <p>
                Vue, React, Redux, TailWind, Chakra
                </p>
            </VerticalTimelineElement>                      
            </VerticalTimeline>  
        </Box>      
    )
}

export default Experience