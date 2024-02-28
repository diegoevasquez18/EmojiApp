import { SearchEmoji } from "../../helpers/searchEmojiList";
import Item from "../Cards/emojiCard";
import "../../Styles/results.css"

const SearchResult = ({ valueEmoji, darkMode }) => {
  const arrayEmojis = SearchEmoji(valueEmoji);

  return (
      <section className="container results">
          {
              arrayEmojis && arrayEmojis.map(item => (
                  <Item
                      key={item.title}
                      title={item.title}
                      emoji={item.symbol}
                      darkMode={darkMode}
                  />
              ))
          }
          
      </section>
  );
}

export default SearchResult;