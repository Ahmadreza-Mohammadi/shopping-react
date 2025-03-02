import AccountSettings from "./accountSettings/accountSettings";
import BillingAddress from "./billingAddress/billingAddress";
import ChangePassword from "./changePassword/changePassword";

export default function UserSinglePage() {
  return (
    <div>
      <AccountSettings />
      <BillingAddress />
      <ChangePassword />
    </div>
  );
}
