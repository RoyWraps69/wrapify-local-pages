
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { format, addDays, setHours, setMinutes, isWeekend } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface ConsultationSchedulerProps {
  locationName: string;
  onSchedule: (date: Date, time: string) => void;
  onCancel: () => void;
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const ConsultationScheduler: React.FC<ConsultationSchedulerProps> = ({ 
  locationName,
  onSchedule,
  onCancel 
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState<'date' | 'time'>('date');
  
  // Function to check if a date should be disabled
  const isDateDisabled = (date: Date) => {
    // Disable weekends, past dates, and dates more than 30 days in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const thirtyDaysFromNow = addDays(today, 30);
    return isWeekend(date) || date < today || date > thirtyDaysFromNow;
  };
  
  const handleSelectDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setStep('time');
    }
  };
  
  const handleSelectTime = (selectedTime: string) => {
    setTime(selectedTime);
  };
  
  const handleBackToDateSelection = () => {
    setTime(null);
    setStep('date');
  };
  
  const handleSchedule = () => {
    if (date && time) {
      onSchedule(date, time);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md max-w-md">
      <div className="mb-3 text-center">
        <h3 className="font-semibold text-lg text-wrap-blue">
          Schedule a Consultation in {locationName}
        </h3>
        <p className="text-sm text-wrap-grey">
          Choose a date and time for your vehicle wrap consultation
        </p>
      </div>
      
      {step === 'date' ? (
        <>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            disabled={isDateDisabled}
            className="p-3 pointer-events-auto"
          />
          
          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button 
              disabled={!date}
              className="bg-wrap-blue hover:bg-blue-700"
              onClick={() => date && setStep('time')}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="my-3 text-center">
            <p className="font-medium">Select time for {date && format(date, 'EEEE, MMMM d, yyyy')}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 my-4">
            {timeSlots.map(slotTime => (
              <Button
                key={slotTime}
                variant={time === slotTime ? "default" : "outline"}
                className={time === slotTime ? "bg-wrap-blue" : ""}
                onClick={() => handleSelectTime(slotTime)}
              >
                <Clock className="h-4 w-4 mr-2" /> {slotTime}
              </Button>
            ))}
          </div>
          
          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={handleBackToDateSelection}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Back
            </Button>
            <Button 
              disabled={!time}
              className="bg-wrap-blue hover:bg-blue-700"
              onClick={handleSchedule}
            >
              Schedule Consultation
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ConsultationScheduler;
