import user from "./components/data/user.json";
import { Profile } from "./components/Profile/Profile";

import data from "./components/data/data.json";
import { Statistics } from "./components/Statistics/Statistics";

import friends from "./components/data/friends.json";
import { FriendList } from "./components/FriendList/FriendList";

import transactions from "./components/data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
