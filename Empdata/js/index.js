$(function()
    {
        $.getJSON("data/empdata/empdata.json",displayData);
    }
)
function displayData(data)
{
    let $table=$("<table></table>");
    $table.appendTo("main");
    let employee = data.employee;
    employee.forEach(function(employee, index){

        $table.append(
            `
            <tr>
                <td>
                  <span class="name">${employee.name}</span>
                </td>
                 <td>
                   <span class="salary">${employee.salary}</span> 
                </td>
                 <td>
                 <span class="status">${employee.full_time_status}</span> 
                </td>
            </tr>
        `

        )

    } );
}
