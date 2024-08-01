export default function Layout({
    account,
    form
  }: {
    account: React.ReactNode,
    form: React.ReactNode,
  }) {
    return (
        <>
            <article className="grid place-items-center text-black">
                <div className="bg-white w-3/4 p-10 rounded-lg">
                <h1 className="text-2xl">Account settings</h1>
                    <div className="flex">
                        {account}
                        {form}
                    </div>
                </div>
            </article>
        </>
    )
  }