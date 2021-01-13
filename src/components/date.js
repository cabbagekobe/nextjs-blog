import { parseISO, format } from "date-fns";

Date.propTypes = {
  dateString: PropTypes.string
};

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <time dateTime={dateString}>
      {format(date, "yyyy/M/d")}
    </time>
  );
}
