using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]   // activities/id
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id); // find the id that passed in at the parameter
        }

        // [HttpPost]
        // public async Task<IActionResult> CreateActivity(Activity activity)
        // {
        //     return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        // }

        // [Authorize(Policy = "IsActivityHost")]
        // [HttpPut("{id}")]
        // public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        // {
        //     activity.Id = id;
        //     return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        // }

        // [Authorize(Policy = "IsActivityHost")]
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteActivity(Guid id)
        // {
        //     return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        // }

        // [HttpPost("{id}/attend")]
        // public async Task<IActionResult> Attend(Guid id)
        // {
        //     return HandleResult(await Mediator.Send(new UpdateAttendance.Command { Id = id }));
        // }
    }
}