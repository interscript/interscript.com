import React from 'react'
import { useRouteData } from 'react-static'
import ExamplePage from '../containers/ExamplePage'
import { ScriptConversionExample } from '../../types'

export default () => {
  const { samples }: { samples: ScriptConversionExample[] } =
  useRouteData()

  return (
    <>
      <h2>{`ALA/LC systems`}</h2>
      <p><i>{`Each title of a language or a writing system is followed by a note on the appropriate romanization system used (ALA-LC = American Library Association - Library of Congress)`}</i></p>
      <p><i>The systems listed here are ordered according to the
        <a href="https://www.loc.gov/catdir/cpso/roman.html" target="_blank"> ALA-LC Romanization Tables </a>page</i></p>
      <ExamplePage samples={samples} aggregate={true} authority="ALA/LC"/>
    </>
  )
}
