function Header() {
  return (
    <tr className="text-center">
      <th
        scope="col"
        className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6"
      >
        No
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-sm font-semibold text-gray-900"
      >
        Staff Name
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-sm font-semibold text-gray-900"
      >
        Start
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-sm font-semibold text-gray-900"
      >
        Stop
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-sm font-semibold text-gray-900"
      >
        Request
      </th>
      <th
        scope="col"
        className="px-3 py-3.5 text-sm font-semibold text-gray-900"
      >
        Status
      </th>
    </tr>
  );
}

export default Header;
