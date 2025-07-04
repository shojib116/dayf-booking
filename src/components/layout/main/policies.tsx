export default function Policies() {
  return (
    <section className="container max-sm:px-4 mb-7.5">
      <h3 className="text-xl font-bold text-grey-800 mb-3">Policies</h3>
      <div className="border border-black/10 p-5 rounded-xl">
        <table>
          <tbody>
            <tr>
              <TableDataL>Check-in</TableDataL>
              <TableDataR>
                <span className="font-semibold text-grey-800">
                  Available 24 hours
                </span>
                <br /> Guests are required to show a photo identification and
                credit card upon check-in You'll need to let the property know
                in advance what time you'll arrive.
              </TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>Check-out</TableDataL>
              <TableDataR>
                <span className="font-semibold text-grey-800">
                  Available 24 hours
                </span>
              </TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>Cancellation/ prepayment</TableDataL>
              <TableDataR>
                Cancellation and prepayment policies vary according to
                accommodation type. Please check what <u>conditions</u> may
                apply to each option when making your selection.
              </TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>Children and beds</TableDataL>
              <TableDataR>
                <span className="font-semibold text-grey-800">
                  Child policies
                </span>
                <br />
                Children of any age are welcome. <br /> Children 12 years and
                above will be charged as adults at this property. <br /> To see
                correct prices and occupancy information, please add the number
                of children in your group and their ages to your search. <br />
                <span className="font-semibold text-grey-800">
                  Cot and extra bed policies
                </span>
                <br />
                The number of extra beds allowed is dependent on the option you
                choose. <br /> Please check your selected option for more
                information. <br />
                There are no cots available at this property. <br /> All extra
                beds are subject to availability.
              </TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>No age restriction</TableDataL>
              <TableDataR>There is no age requirement for check-in</TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>Pets</TableDataL>
              <TableDataR>Pets are not allowed.</TableDataR>
            </tr>
            <Seperator />
            <tr>
              <TableDataL>Cash only</TableDataL>
              <TableDataR>This property only accepts cash payments.</TableDataR>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableDataL({ children }: { children: React.ReactNode }) {
  return (
    <td className="text-2xl text-grey-800">
      <div className=" min-h-21.5 flex flex-col justify-center">{children}</div>
    </td>
  );
}

function TableDataR({ children }: { children: React.ReactNode }) {
  return (
    <td className="w-[calc(5.7/10*100%)] text-grey-500 py-2.5 leading-[138%]">
      {children}
    </td>
  );
}

function Seperator() {
  return (
    <tr>
      <td colSpan={2}>
        <div className="h-px w-full bg-black/30" />
      </td>
    </tr>
  );
}
