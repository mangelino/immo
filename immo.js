const fs = require("fs");

(async () => {
  // let x = await fetch(
  //   "https://www.immobiliare.it/api-next/real-estate/count/?minLat=45.460492&maxLat=45.482281&minLng=9.124146&maxLng=9.251003&fkRegione=lom&idProvincia=MI&idComune=8042&idMZona[0]=10047&idMZona[1]=10055&idMZona[2]=10054&idMZona[3]=10053&idMZona[4]=10061&idMZona[5]=10060&idMZona[6]=10050&idMZona[7]=10059&idMZona[8]=10056&idMZona[9]=10049&idMZona[10]=10057&idMZona[11]=10070&idMZona[12]=10296&idMZona[13]=10318&idMZona[14]=10069&idNazione=IT&zoom=13&idContratto=1&idCategoria=1&prezzoMassimo=800000&superficieMinima=100&criterio=rilevanza&__lang=it&path=%2Fvendita-case%2Fmilano%2F",
  //   {
  //     credentials: "include",
  //     headers: {
  //       "User-Agent":
  //         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0",
  //       Accept: "*/*",
  //       "Accept-Language": "en,en-US;q=0.5",
  //       "Sec-Fetch-Dest": "empty",
  //       "Sec-Fetch-Mode": "cors",
  //       "Sec-Fetch-Site": "same-origin",
  //       "If-None-Match": '"bgvgmg8k2zd"',
  //     },
  //     referrer:
  //       "https://www.immobiliare.it/vendita-case/milano/?criterio=rilevanza&prezzoMassimo=800000&superficieMinima=100&idMZona[]=10047&idMZona[]=10055&idMZona[]=10054&idMZona[]=10053&idMZona[]=10061&idMZona[]=10060&idMZona[]=10050&idMZona[]=10059&idMZona[]=10056&idMZona[]=10049&idMZona[]=10057&idMZona[]=10070&idMZona[]=10296&idMZona[]=10318&idMZona[]=10069",
  //     method: "GET",
  //     mode: "cors",
  //   }
  // );
  // //console.log(await x.json());
  // x = await fetch(
  //   "https://www.immobiliare.it/api-next/real-estate/banners/?minLat=45.460492&maxLat=45.482281&minLng=9.124146&maxLng=9.251003&fkRegione=lom&idProvincia=MI&idComune=8042&idMZona[0]=10047&idMZona[1]=10055&idMZona[2]=10054&idMZona[3]=10053&idMZona[4]=10061&idMZona[5]=10060&idMZona[6]=10050&idMZona[7]=10059&idMZona[8]=10056&idMZona[9]=10049&idMZona[10]=10057&idMZona[11]=10070&idMZona[12]=10296&idMZona[13]=10318&idMZona[14]=10069&idNazione=IT&zoom=13&idContratto=1&idCategoria=1&prezzoMassimo=800000&superficieMinima=100&criterio=rilevanza&__lang=it&service=banners",
  //   {
  //     credentials: "include",
  //     headers: {
  //       "User-Agent":
  //         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0",
  //       Accept: "*/*",
  //       "Accept-Language": "en,en-US;q=0.5",
  //       "Sec-Fetch-Dest": "empty",
  //       "Sec-Fetch-Mode": "cors",
  //       "Sec-Fetch-Site": "same-origin",
  //       "If-None-Match": 'W/"ququv3ik133nn"',
  //     },
  //     referrer:
  //       "https://www.immobiliare.it/vendita-case/milano/?criterio=rilevanza&prezzoMassimo=800000&superficieMinima=100&idMZona[]=10047&idMZona[]=10055&idMZona[]=10054&idMZona[]=10053&idMZona[]=10061&idMZona[]=10060&idMZona[]=10050&idMZona[]=10059&idMZona[]=10056&idMZona[]=10049&idMZona[]=10057&idMZona[]=10070&idMZona[]=10296&idMZona[]=10318&idMZona[]=10069",
  //     method: "GET",
  //     mode: "cors",
  //   }
  // );
  //console.log(await x.json());
  let page = 1;
  const PRICE = 1200000;
  const SURFACE = 80;
  const FILE_NAME = "apts_1.json";
  x = await fetch(
    `https://www.immobiliare.it/api-next/search-list/real-estates/?fkRegione=lom&idProvincia=MI&idComune=8042&idMZona[0]=10047&idMZona[1]=10055&idMZona[2]=10054&idMZona[3]=10053&idMZona[4]=10061&idMZona[5]=10060&idMZona[6]=10050&idMZona[7]=10059&idMZona[8]=10056&idMZona[9]=10049&idMZona[10]=10057&idMZona[11]=10070&idMZona[12]=10296&idMZona[13]=10318&idMZona[14]=10069&idNazione=IT&idContratto=1&idCategoria=1&prezzoMassimo=${PRICE}&superficieMinima=${SURFACE}&criterio=rilevanza&__lang=it&pag=${page}&paramsCount=4&path=%2Fvendita-case%2Fmilano%2F`,
    {
      //   credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0",
        Accept: "*/*",
        "Accept-Language": "en,en-US;q=0.5",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
      referrer:
        "https://www.immobiliare.it/vendita-case/milano/?criterio=rilevanza&prezzoMassimo=800000&superficieMinima=100&idMZona[]=10047&idMZona[]=10055&idMZona[]=10054&idMZona[]=10053&idMZona[]=10061&idMZona[]=10060&idMZona[]=10050&idMZona[]=10059&idMZona[]=10056&idMZona[]=10049&idMZona[]=10057&idMZona[]=10070&idMZona[]=10296&idMZona[]=10318&idMZona[]=10069",
      method: "GET",
      mode: "cors",
    }
  );

  let r = await x.json();
  r.results.forEach((v) => {
    fs.appendFileSync(FILE_NAME, JSON.stringify(v));
  });
  //console.log(JSON.stringify(r.results[0].realEstate.properties, undefined, 2));
  // console.log(r.results.filter(x => x.realEstate.properties.length > 1))
  while (!r.isResultsLimitReached) {
    page = page + 1;
    x = await fetch(
      `https://www.immobiliare.it/api-next/search-list/real-estates/?fkRegione=lom&idProvincia=MI&idComune=8042&idMZona[0]=10047&idMZona[1]=10055&idMZona[2]=10054&idMZona[3]=10053&idMZona[4]=10061&idMZona[5]=10060&idMZona[6]=10050&idMZona[7]=10059&idMZona[8]=10056&idMZona[9]=10049&idMZona[10]=10057&idMZona[11]=10070&idMZona[12]=10296&idMZona[13]=10318&idMZona[14]=10069&idNazione=IT&idContratto=1&idCategoria=1&prezzoMassimo=${PRICE}&superficieMinima=${SURFACE}&criterio=rilevanza&__lang=it&pag=${page}&paramsCount=4&path=%2Fvendita-case%2Fmilano%2F`,
      {
        // credentials: "include",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/115.0",
          Accept: "*/*",
          "Accept-Language": "en,en-US;q=0.5",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
        referrer:
          "https://www.immobiliare.it/vendita-case/milano/?criterio=rilevanza&prezzoMassimo=800000&superficieMinima=100&idMZona[]=10047&idMZona[]=10055&idMZona[]=10054&idMZona[]=10053&idMZona[]=10061&idMZona[]=10060&idMZona[]=10050&idMZona[]=10059&idMZona[]=10056&idMZona[]=10049&idMZona[]=10057&idMZona[]=10070&idMZona[]=10296&idMZona[]=10318&idMZona[]=10069",
        method: "GET",
        mode: "cors",
      }
    );
    r = await x.json();
    r.results.forEach((v) => {
      fs.appendFileSync(FILE_NAME, JSON.stringify(v));
    });
  }
})();
