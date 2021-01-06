import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';

import Course from '../components/Course';

class ClassList extends React.Component {
  render() {
    // const [value, onChange] = useState(new Date());
    // const disabledDates = ['tomorrow', 'in3Days', 'in5Days'];
    const disabledDates = [1, 2, 3];

    function isSameDay(a, b) {
      return differenceInCalendarDays(a, b) === 0;
    }

    function tileDisabled({ date, view }) {
      if (view === 'month') {
        return disabledDates.find(dDate => isSameDay(dDate, date));
      }
    }

    return (
      <Container>
        {/* <Link className='login' to='/signIn'>
         로그인 테스트
        </Link> */}
        <CalendarContainer>
          <Calendar 
            tileDisabled={tileDisabled}
          />
        </CalendarContainer>
        <CourseList>
          <Link to='/course/1'><Course /></Link>
          <Link to='/course/1'><Course /></Link>
          <Link to='/course/1'><Course /></Link>
          <Link to='/course/1'><Course /></Link>
          <Link to='/course/1'><Course /></Link>
        </CourseList>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarContainer = styled.div`
  position: fixed;
`;

const CourseList = styled.div`
  padding: 45% 0 25% 0;
  ${'' /* padding: 0; */}
  ${'' /* margin: 0; */}
  ${'' /* overflow: scroll; */}
  width: 100vw;
`;

export default ClassList;
