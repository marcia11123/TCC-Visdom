import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const INITIAL_DATE = CalendarUtils.getCalendarDateString(new Date());

export default function Tela1() {

  const [selected, setSelected] = useState(INITIAL_DATE);

  function onDayPress(day) {
    setSelected(day.dateString);
  }

  const marked = {
    [selected]: {
      selected: true,
    }
  };
  return (
    
     <SafeAreaView style={styles.container}>
     <View style={styles.wrapper}>
       <Calendar
         current={INITIAL_DATE}
         style={styles.calendar}
         theme={{
           todayTextColor: '#3F72D1',
           textMonthFontWeight: 'bold',
           textDayHeaderFontWeight: 'bold',
           textMonthFontSize: 25,
           textDayFontWeight: 'bold',
           textDayFontSize: 15,
           selectedDayBackgroundColor: '#325CAB',
           selectedDayTextColor: '#ffffff',
         }}
         renderArrow={direction => {
           return (
             <View style={styles.calendarButton}>
               <Feather name={`chevron-${direction}`} size={24} color="#4781F5" />
             </View>
           )
         }}
         onDayPress={onDayPress}
         markedDates={marked}
       />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    paddingHorizontal: 24
  },
  calendar: {
    borderRadius: 0,
    overflow: 'hidden',
  },
  calendarButton: {
    backgroundColor: '#e9e5fe',
    padding: 8,
    borderRadius: 100,
  },
  
});
