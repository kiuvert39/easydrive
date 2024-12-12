import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/minicalender.css";
import { Text, Icon, Box } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendar(props: {
  selectRange: boolean;
  onDateChange: (date: ValuePiece) => void;
  [x: string]: any; // eslint-disable-line
}) {
  const { selectRange, onDateChange, ...rest } = props;
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (newDate: Value) => {
    console.log(newDate);
    setDate(newDate);
    if (!Array.isArray(newDate)) {
      onDateChange(newDate); // Trigger callback with selected date
    }
  };
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      borderRadius={"xl"}
      shadow={"xl"}
      w="full"
      // maxW={}
      className=" w-32"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={handleDateChange}
        value={date}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color="custom.500" />}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Box>
  );
}
