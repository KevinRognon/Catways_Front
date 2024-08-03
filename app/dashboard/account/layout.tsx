export default function Layout({
    account,
  }: {
    account: React.ReactNode,
  }) {
    return (
        <>
            <article className="grid place-items-center text-black">
                <h1 className="text-2xl text-white">Account settings</h1>
                <div className="bg-cyan-100 max-w-3/4 p-10 mt-5 rounded-2xl">
                    {account}
                </div>
            </article>
        </>
    )
  }