import { Title } from '@tremor/react'

import { Metadata } from '@redwoodjs/web'

import SQLStatementsCell from 'src/components/SQLStatementsCell'

const DatabaseSqlStatementsPage = () => {
  return (
    <>
      <Metadata
        title="Database SQL Statements"
        description="Database SQL Statements"
      />

      <Title className="pb-4">SQL Statements</Title>
      <SQLStatementsCell />
    </>
  )
}

export default DatabaseSqlStatementsPage
