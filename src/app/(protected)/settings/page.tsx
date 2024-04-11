import { auth, signOut } from "@/lib/auth/auth";

const SettingPage = async () => {
  const session = await auth();
  return (
    <div>
      Setting Page
      <div>session: {JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type='submit'>Sign out</button>
      </form>
    </div>
  );
};

export default SettingPage;
