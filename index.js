var getAllRecords = function() {
    $.getJSON(
        "https://api.airtable.com/v0/appWmYHjclaKFVzEl/Most%20Reviewed?api_key=keyhdc6hrEBiT1OdU&view=sorted",
        function(airtable) {
            var html = [];
            $.each(airtable.records, function(index, record) {
                let id = record.id;
                let name = record.fields["name"];
                let image = record.fields["image"][0].url;
                let location = record.fields["location"];
                let rating = record.fields["rating"];
                let reviews = record.fields["reviews"];
                let type = record.fields["type"];
                let website = record.fields["website"];
                html.push(listContainer(id, name, image, location, rating, reviews, type, website));
            });
            $(".col").append(html);
        }
    );
};

const listContainer = (id, name, image, location, rating, reviews, type, website) => {
    return `

      <a data-toggle="modal" data-target="#${id}">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${image}" alt="Image">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>${type}</p>
            <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}Label" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${id}Label">Click anywhere to exit</h5>
                  </div>
                  <div class="modal-body">
                    <img class="card-img-top" src="${image}" alt="Image">
                    <h3 class="card-title">${name}</h5>
                    <p>${location}</p>
                    <p><span>${reviews}</span> reviews with a rating of <span>${rating}</span> stars</p>
                    <p><a href="${website}" target="_blank">Click here to visit their website</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

    `;
};


const detailedContainer = (id, name, image, location, rating, reviews, type, website) => {
    console.log(id);
    return `
    <a data-toggle="modal" data-target="#${id}">
      <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}Label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${id}Label">${name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img class="card-img-top" src="${image}" alt="Image">
              <h5 class="card-title">${name}</h5>
              <p>${type}</p>
              <p>${location}</p>
              <p>${reviews} total reviews</p>
              <p>${rating} stars</p>
              <p><a href="${website}" target="_blank">${website}</a></p>
            </div>
          </div>
        </div>
      </div>
    </a>
  `;
};


getAllRecords();