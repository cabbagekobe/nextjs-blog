import tinytime from "tinytime";
const postDateTemplate = tinytime("{YYYY}.{Mo}.{DD}", { padMonth: true, padDays: true });

export default function PostDateTime({ children }) {
  return (
    <time dateTime={children}>
      {postDateTemplate.render(new Date(children))}
    </time>
  );
}
