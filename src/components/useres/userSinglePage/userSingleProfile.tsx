import AccountSettings from "./accountSettings/accountSettings";
import BillingAddress from "./billingAddress/billingAddress";
import ChangePassword from "./changePassword/changePassword";

export default function UserSingleProfile() {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <div className="mb-5 ">
        <AccountSettings />
      </div>
      <div className="mb-5">
        <BillingAddress />
      </div>
      <div className="mb-5">
        <ChangePassword />
      </div>
    </div>
  );
}
